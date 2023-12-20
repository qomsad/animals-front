import { Create, NumberInput, SimpleForm } from "react-admin";

export const CatchScheduleCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="month" label="Месяц" sx={{ width: 400 }} />
      <NumberInput source="year" label="Год" sx={{ width: 400 }} />
    </SimpleForm>
  </Create>
);
