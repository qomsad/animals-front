import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import ru from "ra-language-russian";
import { authProvider } from "./auth/AuthProvider";
import { dataProvider } from "./data/DataProvider";

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={polyglotI18nProvider(() => ru, "ru")}
  >
    <Resource name="dic_legal_type" />
  </Admin>
);
