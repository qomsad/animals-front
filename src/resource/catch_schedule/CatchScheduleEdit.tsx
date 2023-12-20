import {
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
} from "react-admin";

export const CatchScheduleEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="month" label="Месяц" sx={{ width: 400 }} />
      <NumberInput source="year" label="Год" sx={{ width: 400 }} />
      <ReferenceInput
        source="statusId"
        reference="catch_schedule_status"
        label="Статус"
        sx={{ width: 400 }}
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
