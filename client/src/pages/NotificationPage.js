import { Page } from "@shopify/polaris";
import React from "react";
import NotificationResourceList from "../components/notification/NotificationResourceList";

const NotificationPage = () => {
  return (
    <Page
      title="Notifications"
      subtitle="List of sales notifcation from Shopify"
    >
      <NotificationResourceList />
    </Page>
  );
};

export default NotificationPage;
