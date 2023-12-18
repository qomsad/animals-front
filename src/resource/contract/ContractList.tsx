import {
  Datagrid,
  CreateButton,
  ExportButton,
  FilterButton,
  FilterForm,
  List,
  TopToolbar,
  TextField,
  Pagination,
  TextInput,
  AutocompleteArrayInput,
  ReferenceArrayInput,
  DateField,
  DateInput,
} from "react-admin";
import { Stack } from "@mui/material";

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
    <FilterButton filters={ContractFilters} />
  </TopToolbar>
);

const ListToolbar = () => (
  <Stack direction="row" justifyContent="space-between">
    <FilterForm filters={ContractFilters} />
  </Stack>
);

export const ContractList = () => (
  <List
    actions={<ListActions />}
    pagination={<Pagination rowsPerPageOptions={[10, 25, 50, 100]} />}
    perPage={10}
    title={"Контракты"}
  >
    <ListToolbar />
    <Datagrid rowClick="edit">
      <TextField source="id" label="#" />
      <TextField source="num" label="Номер" />
      <DateField source="conclusionDate" label="Дата заключения" />
      <DateField source="completionDate" label="Дата завершения" />
      <TextField source="customer.name" label="Заказчик" />
      <TextField source="contractor.name" label="Исполнитель" />
    </Datagrid>
  </List>
);

const ContractFilters = [
  <TextInput label="Номер" source="num" defaultValue="" />,
  <DateInput label="Дата заключения" source="conclusionDate" defaultValue="" />,
  <DateInput label="Дата завершения" source="completionDate" defaultValue="" />,
  <ReferenceArrayInput
    label="Заказчик"
    source="customer"
    reference="organizations"
  >
    <AutocompleteArrayInput
      sx={{ width: 400 }}
      optionText="name"
      label="Заказчик"
      filterToQuery={(searchText) => ({ name: searchText })}
    />
  </ReferenceArrayInput>,
  <ReferenceArrayInput
    label="Исполнитель"
    source="contractor"
    reference="organizations"
  >
    <AutocompleteArrayInput
      sx={{ width: 400 }}
      optionText="name"
      label="Исполнитель"
      filterToQuery={(searchText) => ({ name: searchText })}
    />
  </ReferenceArrayInput>,
];
