import {
  Card,
  ResourceList,
  Pagination,
  Stack,
  EmptyState,
} from "@shopify/polaris";
import { useEffect, useState } from "react";
import NotificationResourceItem from "./NotificationResourceItem";
import { useLocation, useHistory } from "react-router-dom";
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
  const [loading, setLoading] = useState(false);
  const [sortValue, setSortValue] = useState("desc");
  const [notifications, setNotifications] = useState(items);
  const [selectedItems, setSelectedItems] = useState([]);
  const resourceName = {
    singular: "notification",
    plural: "notifications",
  };

  const emptyStateMarkup = (
    <EmptyState
      heading="Empty product!!"
      image="https://cdn.shopify.com/s/files/1/2376/3301/products/emptystate-files.png"
    />
  );

  return (
    <Stack vertical>
      <Card>
        <ResourceList
          loading={loading}
          resourceName={resourceName}
          items={notifications}
          renderItem={NotificationResourceItem}
          sortValue={sortValue}
          emptyState={emptyStateMarkup}
          sortOptions={[
            { label: "Newest update", value: "desc" },
            { label: "Oldest update", value: "asc" },
          ]}
          onSortChange={(sortVal) => {
            setSortValue(sortVal);
          }}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          selectable
        />
      </Card>

      <Stack distribution="center">
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
      </Stack>
    </Stack>
  );
}
