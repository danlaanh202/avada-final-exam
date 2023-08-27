import {
  Frame,
  Navigation,
  TopBar,
  Avatar,
  TextStyle,
  Stack,
} from "@shopify/polaris";
import {
  HomeMinor,
  NotificationMajor,
  SettingsMinor,
} from "@shopify/polaris-icons";

import { useLocation, useNavigate } from "react-router-dom";

export default function PageLayout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const userMenuMarkup = (
    <div>
      <Stack spacing="10" wrap={false} alignment="center">
        <Avatar size="small" initials="A" />
        <TextStyle>Avada</TextStyle>
      </Stack>
    </div>
  );

  const topBarMarkup = (
    <TopBar userMenu={userMenuMarkup} showNavigationToggle />
  );

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "/",
            label: "Home",
            icon: HomeMinor,
            selected: pathname === "/",
            onClick: () => navigate("/"),
          },
          {
            url: "/notifications",
            label: "Notifications",
            icon: NotificationMajor,
            selected: pathname?.includes("/notifications"),
            onClick: () => navigate("/notifications"),
          },
          {
            url: "/settings",
            label: "Settings",
            icon: SettingsMinor,
            selected: pathname?.includes("/settings"),
            onClick: () => navigate("/settings"),
          },
        ]}
      />
    </Navigation>
  );

  return (
    <Frame topBar={topBarMarkup} navigation={navigationMarkup}>
      {children}
    </Frame>
  );
}
