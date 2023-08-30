import { AppProvider } from "@shopify/polaris";

import React from "react";
import PageLayout from "./layout/PageLayout";
import HomePage from "./pages/HomePage";
import NotificationPage from "./pages/NotificationPage";
import SettingPage from "./pages/SettingPage";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
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
        <Routes>
          <Route
            element={
              <PageLayout>
                <Outlet />
              </PageLayout>
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path="/settings" element={<SettingPage />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
