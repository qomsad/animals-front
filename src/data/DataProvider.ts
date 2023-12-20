import { fetchUtils, DataProvider, Options, HttpError } from "react-admin";

const api = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL
  : window.location.origin;

const request = (url: String, options: Options = {}) => {
  const { access_token } = JSON.parse(localStorage.getItem("user") ?? "");
  options.user = {
    authenticated: true,
    token: "Bearer " + access_token,
  };
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const filters = params.filter;

    const sort = field
      ? `${order === "ASC" ? "" : "-"}${field.split(".")[0]}`
      : "";

    const filter = Object.keys(filters)
      .map((key) => {
        if (Array.isArray(filters[key])) {
          return `${key} == ${filters[key].join("|")}`;
        } else if (typeof filters[key] == "string") {
          return `${key} @=* ${filters[key]}`;
        } else if (typeof filters[key] == "number") {
          return `${key} @=* ${filters[key]}`;
        }
      })
      .join(",");

    const url = `${api}/${resource}?sorts=${sort}&filters=${filter}&page=${page}&pageSize=${perPage}`;

    const { json } = await request(url);
    return {
      data: json.data,
      total: json.total,
    };
  },

  getMany: async (resource, params) => {
    const ids = params.ids.join("|");
    const url = `${api}/${resource}?filters=id==${ids}`;
    const { json } = await request(url);
    return { data: json.data };
  },

  getOne: (resource, params) =>
    request(`${api}/${resource}/${params.id}`).then(({ json }) => ({
      data: json,
    })),

  getManyReference: (resource, params) => new Promise<any>(() => null),

  create: async (resource, params) => {
    const response = await request(`${api}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    if (response.status === 200) {
      return Promise.resolve({ data: JSON.parse(JSON.stringify(params.data)) });
    }
    return Promise.reject(new HttpError(response.body, response.status));
  },

  update: (resource, params) =>
    request(`${api}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(),

  updateMany: (resource, params) => new Promise<any>(() => null),

  delete: (resource, params) =>
    request(`${api}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(),

  deleteMany: (resource, params) => new Promise<any>(() => null),
};
