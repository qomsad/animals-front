import {
  Create,
  DateInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
} from "react-admin";

export const ReportMunicipalityCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="number" label="Номер" />
      <DateInput source="dateStart" label="Начало периода" />
      <DateInput source="dateEnd" label="Конец периода" />
      <ReferenceInput
        source="municipalityId"
        reference="dic_municipality"
        label="Населенный пункт"
      >
        <SelectInput
          optionText="value"
          sx={{ width: 400 }}
          label="Населенный пункт"
        />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
