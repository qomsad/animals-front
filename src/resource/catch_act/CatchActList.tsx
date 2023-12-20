import {
  ArrayField,
  AutocompleteArrayInput,
  ChipField,
  CreateButton,
  Datagrid,
  DateField,
  DateInput,
  ExportButton,
  FilterButton,
  FilterForm,
  List,
  Pagination,
  ReferenceArrayInput,
  ReferenceField,
  SingleFieldList,
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

export const CatchActList = () => (
  <List
    actions={<ListActions />}
    pagination={<Pagination rowsPerPageOptions={[10, 25, 50, 100]} />}
    perPage={10}
    title={"Акты отлова"}
  >
    <ListToolbar />
    <Datagrid rowClick="edit">
      <TextField source="id" label="#" />
      <ReferenceField
        source="organizationId"
        reference="organizations"
        label="Организация отлова"
      >
        <TextField source="name" label="Организация отлова" />
      </ReferenceField>
      <ReferenceField
        source="municipalityId"
        reference="dic_municipality"
        label="Населенный пункт"
      >
        <TextField source="value" label="Населенный пункт" />
      </ReferenceField>
      <ReferenceField
        source="contractId"
        reference="contracts"
        label="Контракт"
      >
        <TextField source="num" label="Контракт" />
      </ReferenceField>
      <DateField source="captureDate" label="Дата отлова" />
      <ArrayField source="catchActCards" label="Карточки отлова">
        <SingleFieldList>
          <ChipField source="id" />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);

const Filters = [
  <ReferenceArrayInput
    source="organizationId"
    reference="organizations"
    label="Организация отлова"
  >
    <AutocompleteArrayInput
      optionText="name"
      sx={{ width: 400 }}
      label="Организация отлова"
      filterToQuery={(searchText) => ({ name: searchText })}
    />
  </ReferenceArrayInput>,
  <ReferenceArrayInput
    source="municipalityId"
    reference="dic_municipality"
    label="Населенный пункт"
  >
    <AutocompleteArrayInput
      optionText="value"
      sx={{ width: 400 }}
      label="Населенный пункт"
      filterToQuery={(searchText) => ({ value: searchText })}
    />
  </ReferenceArrayInput>,
  <ReferenceArrayInput
    source="contractId"
    reference="contracts"
    label="Контракт"
  >
    <AutocompleteArrayInput
      optionText="num"
      sx={{ width: 400 }}
      label="Контракт"
      filterToQuery={(searchText) => ({ num: searchText })}
    />
  </ReferenceArrayInput>,
  <DateInput
    source="DTScaptureDate"
    sx={{ width: 400 }}
    label="Дата отлова после"
  />,
  <DateInput
    source="DTEcaptureDate"
    sx={{ width: 400 }}
    label="Дата отлова до"
  />,
];
