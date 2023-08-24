import {
  LegacyCard,
  ResourceList,
  Pagination,
  HorizontalStack,
  Box,
  EmptyState,
} from "@shopify/polaris";
import { useEffect, useState } from "react";
import NotificationResourceItem from "./NotificationResourceItem";
const items = [
  {
    id: "1",
    url: "#",
    name: "Mae Jemison",
    location: "Decatur, USA",
  },
  {
    id: "2",
    url: "#",
    name: "Ellen Ochoa",
    location: "Los Angeles, USA",
  },
  {
    id: "3",
    url: "#",
    name: "Ellen Ochoa",
    location: "Los Angeles, USA",
  },
  {
    id: "4",
    url: "#",
    name: "Ellen Ochoa",
    location: "Los Angeles, USA",
  },
  {
    id: "5",
    url: "#",
    name: "Ellen Ochoa",
    location: "Los Angeles, USA",
  },
  {
    id: "6",
    url: "#",
    name: "Ellen Ochoa",
    location: "Los Angeles, USA",
  },
  {
    id: "7",
    url: "#",
    name: "Ellen Ochoa",
    location: "Los Angeles, USA",
  },
];
export default function NotificationResourceList() {
  const [sortValue, setSortValue] = useState("DATE_MODIFIED_DESC");
  const [notifications, setNotifications] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const resourceName = {
    singular: "notification",
    plural: "notifications",
  };

  const emptyStateMarkup = !notifications.length ? (
    <EmptyState
      heading="Empty product!!"
      image="https://cdn.shopify.com/s/files/1/2376/3301/products/emptystate-files.png"
    />
  ) : undefined;
  useEffect(() => {
    setNotifications(items);
  }, []);
  return (
    <>
      <LegacyCard>
        <ResourceList
          resourceName={resourceName}
          items={notifications}
          renderItem={NotificationResourceItem}
          sortValue={sortValue}
          emptyState={emptyStateMarkup}
          sortOptions={[
            { label: "Newest update", value: "DATE_MODIFIED_DESC" },
            { label: "Oldest update", value: "DATE_MODIFIED_ASC" },
          ]}
          onSortChange={(selected) => {
            setSortValue(selected);
            console.log(`Sort option changed to ${selected}.`);
          }}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          selectable
        />
      </LegacyCard>

      <Box paddingBlockEnd={4} paddingBlockStart={8}>
        <HorizontalStack align="center">
          <Pagination
            hasPrevious
            onPrevious={() => {
              console.log("Previous");
            }}
            hasNext
            onNext={() => {
              console.log("Next");
            }}
          />
        </HorizontalStack>
      </Box>
    </>
  );
}