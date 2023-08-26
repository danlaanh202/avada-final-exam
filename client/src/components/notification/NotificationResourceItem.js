import {
  Box,
  HorizontalStack,
  ResourceItem,
  SkeletonBodyText,
  SkeletonDisplayText,
  Text,
} from "@shopify/polaris";
import React from "react";
import NotificationProductItem from "./NotificationProductItem";
import { NotificationPopup } from "./NotificationPopup";

const NotificationResourceItem = (item) => {
  const { id, name } = item;

  return (
    <ResourceItem id={id} accessibilityLabel={`View details for ${name}`}>
      <HorizontalStack align="space-between">
        <NotificationProductItem />
        <Box as="div" width="120px">
          <Text alignment="end">From march 8, 2021</Text>
        </Box>
      </HorizontalStack>
    </ResourceItem>
  );
};

export default NotificationResourceItem;
