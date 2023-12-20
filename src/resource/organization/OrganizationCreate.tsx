import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  useNotify,
} from "react-admin";

export const OrganizationCreate = () => {
  const notify = useNotify();

  const onError = (error: Error) => {
    notify(error.message);
  };

  return (
    <Create mutationOptions={{ onError }}>
      <SimpleForm>
        <TextInput
          label="Адрес"
          source="address"
          defaultValue=""
          sx={{ width: 400 }}
        />
        <TextInput
          label="Название"
          source="name"
          defaultValue=""
          sx={{ width: 400 }}
        />
        <TextInput
          label="ИНН"
          source="inn"
          defaultValue=""
          sx={{ width: 400 }}
        />
        <TextInput
          label="КПП"
          source="kpp"
          defaultValue=""
          sx={{ width: 400 }}
        />
        <ReferenceInput
          source="organizationTypeId"
          reference="dic_organization_type"
          label="Вид организации"
        >
          <SelectInput
            optionText="value"
            sx={{ width: 400 }}
            label="Вид организации"
          />
        </ReferenceInput>
        <ReferenceInput
          source="legalTypeId"
          reference="dic_legal_type"
          label="Тип организации"
        >
          <SelectInput
            optionText="value"
            sx={{ width: 400 }}
            label="Тип организации"
          />
        </ReferenceInput>

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
};
