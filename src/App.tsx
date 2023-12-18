import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import ru from "ra-language-russian";
import { authProvider } from "./auth/AuthProvider";
import { dataProvider } from "./data/DataProvider";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import { OrganizationList } from "./resource/organization/OrganizationList";
import { OrganizationEdit } from "./resource/organization/OrganizationEdit";
import { OrganizationCreate } from "./resource/organization/OrganizationCreate";
import { ContractList } from "./resource/contract/ContractList";
import { ContractEdit } from "./resource/contract/ContractEdit";
import { ContractCreate } from "./resource/contract/ContractCreate";

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={polyglotI18nProvider(() => ru, "ru")}
  >
    <Resource name="dic_legal_type" />
    <Resource name="dic_organization_type" />
    <Resource name="dic_municipality" />
    <Resource
      name="organizations"
      list={OrganizationList}
      edit={OrganizationEdit}
      icon={CorporateFareIcon}
      create={OrganizationCreate}
      options={{ label: "Организации", title: "Организации" }}
    />
    <Resource
      name="contracts"
      list={ContractList}
      edit={ContractEdit}
      icon={DocumentScannerIcon}
      create={ContractCreate}
      options={{ label: "Контракты", title: "Контракты" }}
    />
  </Admin>
);
