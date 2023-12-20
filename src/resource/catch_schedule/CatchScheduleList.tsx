import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const CatchScheduleList = () => (
  <List>
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
