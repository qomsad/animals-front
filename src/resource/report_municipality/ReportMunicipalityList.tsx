import {
  AutocompleteArrayInput,
  CreateButton,
  Datagrid,
  DateField,
  DateInput,
  ExportButton,
  FilterButton,
  FilterForm,
  List,
  NumberField,
  NumberInput,
  Pagination,
  ReferenceArrayInput,
  ReferenceField,
  TextField,
  TopToolbar,
} from "react-admin";
import { Stack } from "@mui/material";

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
    <FilterButton filters={Filters} />
  </TopToolbar>
);
const ListToolbar = () => (
  <Stack direction="row" justifyContent="space-between">
    <FilterForm filters={Filters} />
  </Stack>
);

export const ReportMunicipalityList = () => (
  <List
    actions={<ListActions />}
    pagination={<Pagination rowsPerPageOptions={[10, 25, 50, 100]} />}
    perPage={10}
    title={"Отчет по населенным пунктам"}
  >
    <ListToolbar />
    <Datagrid rowClick="edit">
      <TextField source="id" label="#" />
      <NumberField source="number" label="Номер" />
      <DateField source="dateStart" label="Начало периода" />
      <DateField source="dateEnd" label="Конец периода" />
      <ReferenceField
        source="statusId"
        reference="report_municipality_status"
        label="Статус"
      >
        <TextField source="statusName" label="Статус"></TextField>
      </ReferenceField>
      <DateField source="dateStatus" label="Дата статуса" />
      <NumberField source="totalCost" label="Общая стоимость" />
      <ReferenceField
        source="municipalityId"
        reference="dic_municipality"
        label="Населенный пункт"
      >
        <TextField source="value" label="Населенный пункт"></TextField>
      </ReferenceField>
      <NumberField source="numberOfAnimals" label="Кол-во животных" />
    </Datagrid>
  </List>
);

const Filters = [
  <NumberInput source="number" label="Номер" defaultValue="" />,
  <DateInput source="DTSdateStart" label="Отчеты после" defaultValue="" />,
  <DateInput source="DTEdateEnd" label="Отчеты до" />,
  <ReferenceArrayInput
    label="Статус"
    source="statusId"
    reference="report_municipality_status"
  >
    <AutocompleteArrayInput
      sx={{ width: 400 }}
      optionText="statusName"
      label="Статус"
      filterToQuery={(searchText) => ({ statusName: searchText })}
    />
  </ReferenceArrayInput>,
  <DateInput source="DTSdateStatus" label="Дата статуса после" />,
  <DateInput source="DTEdateStatus" label="Дата статуса до" />,
  <NumberInput source="totalCost" label="Общая стоимость" />,
  <ReferenceArrayInput
    source="municipalityId"
    reference="dic_municipality"
    label="Населенный пункт"
  >
    <AutocompleteArrayInput
      sx={{ width: 400 }}
      optionText="value"
      label="Населенный пункт"
      filterToQuery={(searchText) => ({ value: searchText })}
    />
  </ReferenceArrayInput>,
  <NumberInput source="numberOfAnimals" label="Кол-во животных" />,
];
