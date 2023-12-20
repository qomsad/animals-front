import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import ru from "ra-language-russian";
import { authProvider } from "./auth/AuthProvider";
import { dataProvider } from "./data/DataProvider";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import PetsIcon from "@mui/icons-material/Pets";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { OrganizationList } from "./resource/organization/OrganizationList";
import { OrganizationEdit } from "./resource/organization/OrganizationEdit";
import { OrganizationCreate } from "./resource/organization/OrganizationCreate";
import { ContractList } from "./resource/contract/ContractList";
import { ContractEdit } from "./resource/contract/ContractEdit";
import { ContractCreate } from "./resource/contract/ContractCreate";
import { CatchActList } from "./resource/catch_act/CatchActList";
import { CatchActEdit as CatchActEdit } from "./resource/catch_act/CatchActEdit";
import { CatchScheduleList } from "./resource/catch_schedule/CatchScheduleList";

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={polyglotI18nProvider(() => ru, "ru")}
  >
    <Resource name="dic_legal_type" />
    <Resource name="dic_organization_type" />
    <Resource name="dic_municipality" />
    <Resource name="catch_schedule_status" />
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
    <Resource
      name="catch_acts"
      list={CatchActList}
      edit={CatchActEdit}
      icon={PetsIcon}
      options={{ label: "Акты отлова", title: "Акты отлова" }}
    />
    <Resource
      name="catch_schedule"
      list={CatchScheduleList}
      edit={EditGuesser}
      icon={AutoGraphIcon}
      options={{ label: "План-график отлова", title: "План-график отлова" }}
    />
  </Admin>
);
