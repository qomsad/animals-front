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
      <DateField source="competitionDate" label="Дата завершения" />
      <TextField source="customer.name" label="Заказчик" />
      <TextField source="contractor.name" label="Исполнитель" />
    </Datagrid>
  </List>
);

const ContractFilters = [
  <TextInput label="Номер" source="num" defaultValue="" />,
  <DateInput
    label="Дата заключения после"
    source="DTSconclusionDate"
    defaultValue=""
  />,
  <DateInput
    label="Дата заключения до"
    source="DTEconclusionDate"
    defaultValue=""
  />,
  <DateInput
    label="Дата завершения после"
    source="DTScompetitionDate"
    defaultValue=""
  />,
  <DateInput
    label="Дата завершения до"
    source="DTEcompetitionDate"
    defaultValue=""
  />,
  <ReferenceArrayInput
    label="Заказчик"
    source="customerId"
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
    source="contractorId"
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
