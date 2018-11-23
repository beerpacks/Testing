import * as React from "react";
import "./App.css";

import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import DevTools from "mobx-react-devtools";
import { Login } from "./Login";
import { RegisterAccountConfirmView } from "./components/RegisterNewAccountConfirm"
import { Dashboard } from "./Dashboard";
import { GroupHomePage } from "./group/home/grouphomepage";
import { setHistory } from "./utils";
import { BrewerHomePage } from "./brewer/home/brewerhomepage";
import { GroupVideoManagementPage } from "./group/videomanagement/groupvideomanagement";
import { VideoLibraryPage } from "./home/videolibrary/videolibrarypage";
import { CoffeeTagPage } from "./home/coffeetag/coffeetagpage";
import { Debug, Row } from "./generic";
import { Store } from "src/store/store";
import { BrewerBrandingPage } from "./brewer/branding/brewerbrandingpage";
import { BrewerManageAlertPage } from "./brewer/managealert/managealertpage";
import { BrewerAnalyticsPage } from "src/brewer/analytics/breweranalyticspage";
import { BuyDownloadPage } from "src/cart/butdownloadpage";

import { observer } from "mobx-react";
import { PageMaquette } from "./tests/maquette";
import { GroupMaintenancePage } from "src/group/maintenance/groupmaintenance";
import { GroupAnalyticsPage } from "./group/analytics/groupanalytics";
import { GroupCoffeeTagPage } from "./group/coffeetag/groupcoffeetag";
import { GroupOnlineOrderingPage } from "./group/onlineordering/onlineorderingpage";
import { GroupUserPage } from "./group/user/userpage";
import { GroupSettingsPage } from "./group/settings/groupsettingspage";
import { ResetPasswordView } from "./components/ResetPasswordView";
// import { pageMaquette } from "src/tests/maquette";

const App = observer(() => {
  return (
    <div className="App">
      <DevTools />
      <Debug>
        <button
          style={{ position: "fixed", opacity: 0.7, visibility: "collapse" }}
          onClick={() => Store.login.debug_breakLogin()}
        >
          Reset
        </button>
        <PageMaquette />
      </Debug>
      <BrowserRouter basename="/sophia">
        <Route
          render={({ history, location }) => {
            setHistory(history, location);
            return (
              <div>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/login" component={Login} />
                  <Route path="/resetpassword/:email/:token" component={ResetPasswordView} />
                  <Route path="/confirmaccount/:firstname/:lastname/:email/:token" component={RegisterAccountConfirmView} />
                  <Route path="/dashboard/:p1?" component={Dashboard} />
                  <Route path="/grouphome/:groupId" component={GroupHomePage} />
                  <Route
                    path="/groupvideomanagement/:groupId"
                    component={GroupVideoManagementPage}
                  />
                  <Route
                    path="/groupmaintenance/:groupId"
                    component={GroupMaintenancePage}
                  />
                  <Route
                    path="/groupanalytics/:groupId"
                    component={GroupAnalyticsPage}
                  />
                  <Route
                    path="/groupcoffeetag/:groupId"
                    component={GroupCoffeeTagPage}
                  />
                  <Route
                    path="/grouponlineordering/:groupId"
                    component={GroupOnlineOrderingPage}
                  />
                  <Route path="/groupuser/:groupId" component={GroupUserPage} />
                  <Route
                    path="/groupsettings/:groupId"
                    component={GroupSettingsPage}
                  />

                  <Route
                    path="/brewerhome/:serialNumber"
                    component={BrewerHomePage}
                  />
                  <Route
                    path="/brewerbranding/:serialNumber"
                    component={BrewerBrandingPage}
                  />
                  <Route
                    path="/brewermanagealert/:serialNumber"
                    component={BrewerManageAlertPage}
                  />
                  <Route
                    path="/breweranalytics/:serialNumber"
                    component={BrewerAnalyticsPage}
                  />
                  <Route path="/videolibrary" component={VideoLibraryPage} />
                  <Route path="/coffeetag" component={CoffeeTagPage} />
                  <Route
                    path="/buydownload/:serialNumber?"
                    component={BuyDownloadPage}
                  />
                  <Route component={Login} />
                </Switch>
              </div>
            );
          }}
        />
      </BrowserRouter>
    </div>
  );
});
//}

export default App;
