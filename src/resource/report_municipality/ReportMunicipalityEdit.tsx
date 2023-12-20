import {
  Create,
  DateInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
} from "react-admin";

export const ReportMunicipalityEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput
        source="statusId"
        reference="report_municipality_status"
        label="Статус"
      >
        <SelectInput
          optionText="statusName"
          sx={{ width: 400 }}
          label="Статус"
        />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
