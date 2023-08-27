import { Stack, ResourceItem, TextStyle } from "@shopify/polaris";
import React from "react";

import { NotificationPopup } from "./NotificationPopup/NotificationPopup";

const NotificationResourceItem = (item) => {
  const { id, name } = item;

  return (
    <ResourceItem id={id} accessibilityLabel={`View details for ${name}`}>
      <Stack distribution="equalSpacing">
        <NotificationPopup />
        <TextStyle>From march 8, 2021</TextStyle>
      </Stack>
    </ResourceItem>
  );
};

export default NotificationResourceItem;
