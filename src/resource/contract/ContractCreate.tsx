import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  useNotify,
  DateInput,
  AutocompleteInput,
  ArrayInput,
  NumberInput,
  SimpleFormIterator,
} from "react-admin";

export const ContractCreate = () => {
  const notify = useNotify();

  const onError = (error: Error) => {
    notify(error.message);
  };

  return (
    <Create mutationOptions={{ onError }}>
      <SimpleForm>
        <TextInput source="num" label="Номер" sx={{ width: 400 }} />
        <DateInput
          source="conclusionDate"
          label="Дата заключения"
          sx={{ width: 400 }}
        />
        <DateInput
          source="completionDate"
          label="Дата завершения"
          sx={{ width: 400 }}
        />
        <ReferenceInput
          source="customerId"
          reference="organizations"
          label="Заказчик"
        >
          <AutocompleteInput
            optionText="name"
            sx={{ width: 400 }}
            label="Заказчик"
            filterToQuery={(searchText) => ({ name: searchText })}
          />
        </ReferenceInput>
        <ReferenceInput
          source="contractorId"
          reference="organizations"
          label="Исполнитель"
        >
          <AutocompleteInput
            optionText="name"
            sx={{ width: 400 }}
            label="Исполнитель"
            filterToQuery={(searchText) => ({ name: searchText })}
          />
        </ReferenceInput>
        <ArrayInput source="contractCosts" label="Стоимость">
          <SimpleFormIterator>
            <NumberInput source="price" label="рублей" />
            <ReferenceInput
              source="municipalityId"
              label="Населенный пункт"
              reference="dic_municipality"
            >
              <AutocompleteInput
                optionText="value"
                sx={{ width: 400 }}
                label="Населенный пункт"
                filterToQuery={(searchText) => ({ value: searchText })}
              />
            </ReferenceInput>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};
