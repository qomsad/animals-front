import {
  AutocompleteArrayInput,
  CreateButton,
  Datagrid,
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

export const CatchScheduleList = () => (
  <List
    actions={<ListActions />}
    pagination={<Pagination rowsPerPageOptions={[10, 25, 50, 100]} />}
    perPage={10}
    title={"План-график отлова"}
  >
    <ListToolbar />
    <Datagrid rowClick="edit">
      <TextField source="id" label="#" />
      <NumberField source="month" label="Месяц" />
      <NumberField source="year" label="Год" />
      <ReferenceField
        source="statusId"
        reference="catch_schedule_status"
        label="Статус"
      >
        <TextField source="statusName" label="Статус" />
      </ReferenceField>
    </Datagrid>
  </List>
);

const Filters = [
  <NumberInput source="month" label="Месяц" />,
  <NumberInput source="year" label="Год" />,
  <ReferenceArrayInput
    source="statusId"
    reference="catch_schedule_status"
    label="Статус"
    sx={{ width: 400 }}
  >
    <AutocompleteArrayInput
      optionText="statusName"
      sx={{ width: 400 }}
      label="Статус"
    />
  </ReferenceArrayInput>,
];
