import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const LogList = () => (
  <List>
    <Datagrid>
      <TextField source="id" label="#" />
      <TextField source="user" label="Логин" />
      <DateField source="actionDate" label="Время" showTime />
      <TextField source="action" label="Действие" />
      <TextField source="registry" label="Реестр" />
      <TextField source="entity" />
    </Datagrid>
  </List>
);
