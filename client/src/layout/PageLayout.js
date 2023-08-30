import { Frame, Navigation, TopBar } from "@shopify/polaris";
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
    <TopBar.UserMenu
      actions={[]}
      name="Avada"
      initials="A"
      open={false}
      onToggle={() => {}}
    />
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
