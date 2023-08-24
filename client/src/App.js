import { AppProvider } from "@shopify/polaris";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import React from "react";
import PageLayout from "./layout/PageLayout";
import HomePage from "./pages/HomePage";
import NotificationPage from "./pages/NotificationPage";
import SettingPage from "./pages/SettingPage";

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