import {
  ArrayInput,
  AutocompleteInput,
  Create,
  DateInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const CatchActCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput
        source="organizationId"
        reference="organizations"
        label="Организация отлова"
      >
        <AutocompleteInput
          optionText="name"
          sx={{ width: 400 }}
          label="Организация отлова"
          filterToQuery={(searchText) => ({ name: searchText })}
        />
      </ReferenceInput>
      <ReferenceInput
        source="municipalityId"
        reference="dic_municipality"
        label="Населенный пункт"
      >
        <AutocompleteInput
          optionText="value"
          sx={{ width: 400 }}
          label="Населенный пункт"
          filterToQuery={(searchText) => ({ value: searchText })}
        />
      </ReferenceInput>
      <ReferenceInput
        source="contractId"
        reference="contracts"
        label="Контракт"
      >
        <AutocompleteInput
          optionText="num"
          sx={{ width: 400 }}
          label="Контракт"
          filterToQuery={(searchText) => ({ num: searchText })}
        />
      </ReferenceInput>
      <DateInput source="captureDate" sx={{ width: 400 }} label="Дата отлова" />
      <ArrayInput source="catchActCards" label="Карточки отлова">
        <SimpleFormIterator getItemLabel={(index) => `#${index + 1}`} inline>
          <TextInput source="category" label="Категория" />
          <TextInput source="sex" label="Пол" />
          <TextInput source="breed" label="Порода" />
          <TextInput source="size" label="Размер" />
          <TextInput source="wool" label="Шерсть" />
          <TextInput source="color" label="Цвет" />
          <TextInput source="ears" label="Уши" />
          <TextInput source="tail" label="Хвост" />
          <TextInput source="specialSigns" label="Специальные приметы" />
          <TextInput source="identificationLabel" label="Метка" />
          <TextInput source="chipNumber" label="Чип" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
