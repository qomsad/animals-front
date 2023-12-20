import {
  ArrayField,
  ChipField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  SingleFieldList,
  TextField,
} from "react-admin";

export const CatchActList = () => (
  <List>
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
