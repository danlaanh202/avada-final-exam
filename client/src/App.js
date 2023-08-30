import { AppProvider } from "@shopify/polaris";
import React from "react";
import PageLayout from "./layout/PageLayout";
import HomePage from "./pages/HomePage";
import NotificationPage from "./pages/NotificationPage";
import SettingPage from "./pages/SettingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routeConfig = [
  {
    path: "/",
    page: HomePage,
    elem: <HomePage />,
  },
  {
    path: "/notifications",
    page: NotificationPage,
    elem: <NotificationPage />,
  },
  {
    path: "/settings",
    page: SettingPage,
    elem: <SettingPage />,
  },
];

const App = () => {
  return (
    <AppProvider
      i18n={{
        Polaris: {
          ResourceList: {
            sortingLabel: "Sort by",
            defaultItemSingular: "item",
            defaultItemPlural: "items",
            showing: "Showing {itemsCount} {resource}",
            Item: {
              viewItem: "View details for {itemName}",
            },
          },
          Common: {
            checkbox: "checkbox",
          },
        },
      }}
      theme={{
        logo: {
          width: 124,
          topBarSource: "https://i.imgur.com/LTYRxl7.png",
          contextualSaveBarSource: "https://i.imgur.com/LTYRxl7.png",
          url: "#",
          accessibilityLabel: "Logo",
        },
      }}
    >
      <Router>
        <Switch>
          {routeConfig.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              exact
              render={() => <PageLayout>{item.elem}</PageLayout>}
            />
          ))}
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;
