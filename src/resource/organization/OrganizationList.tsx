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
  NumberInput,
} from "react-admin";
import { Stack } from "@mui/material";

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
    <FilterButton filters={OrganizationFilters} />
  </TopToolbar>
);

const ListToolbar = () => (
  <Stack direction="row" justifyContent="space-between">
    <FilterForm filters={OrganizationFilters} />
  </Stack>
);
export const OrganizationList = () => (
  <List
    actions={<ListActions />}
    pagination={<Pagination rowsPerPageOptions={[10, 25, 50, 100]} />}
    perPage={10}
    title={"Организации"}
  >
    <ListToolbar />
    <Datagrid rowClick="edit">
      <TextField source="id" label="#" />
      <TextField source="address" label="Адрес" />
      <TextField source="name" label="Название" />
      <TextField source="inn" label="ИНН" />
      <TextField source="kpp" label="КПП" />
      <TextField source="organizationType.value" label="Вид организации" />
      <TextField source="legalType.value" label="Тип организации" />
    </Datagrid>
  </List>
);

const OrganizationFilters = [
  <TextInput label="Адрес" source="address" defaultValue="" />,
  <TextInput label="Название" source="name" defaultValue="" />,
  <NumberInput label="ИНН" source="inn" defaultValue="" />,
  <NumberInput label="КПП" source="kpp" defaultValue="" />,
  <ReferenceArrayInput
    label="Вид организации"
    source="organizationType"
    reference="dic_organization_type"
  >
    <AutocompleteArrayInput
      sx={{ width: 400 }}
      optionText="value"
      label="Вид организации"
      filterToQuery={(searchText) => ({ value: searchText })}
    />
  </ReferenceArrayInput>,
  <ReferenceArrayInput
    label="Тип организации"
    source="legalType"
    reference="dic_legal_type"
  >
    <AutocompleteArrayInput
      sx={{ width: 400 }}
      optionText="value"
      label="Тип организации"
      filterToQuery={(searchText) => ({ value: searchText })}
    />
  </ReferenceArrayInput>,
];
