import {
  ArrayInput,
  AutocompleteInput,
  DateInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const ContractEdit = () => (
  <Edit>
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
        source="customer.id"
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
        source="contractor.id"
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
          <NumberInput source="catchCost" label="рублей" />
          <ReferenceInput
            source="municipality.id"
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
  </Edit>
);
