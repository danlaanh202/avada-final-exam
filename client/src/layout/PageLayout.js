import { Frame, Navigation, TopBar } from "@shopify/polaris";
import {
  HomeMinor,
  NotificationMajor,
  SettingsMinor,
} from "@shopify/polaris-icons";

import { useLocation, useHistory } from "react-router-dom";

export default function PageLayout({ children }) {
  const { pathname } = useLocation();
  const history = useHistory();
  const handleNavigate = (path) => {
    history.push(path);
  };
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
            onClick: () => handleNavigate("/"),
          },
          {
            url: "/notifications",
            label: "Notifications",
            icon: NotificationMajor,
            selected: pathname?.includes("/notifications"),
            onClick: () => handleNavigate("/notifications"),
          },
          {
            url: "/settings",
            label: "Settings",
            icon: SettingsMinor,
            selected: pathname?.includes("/settings"),
            onClick: () => handleNavigate("/settings"),
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
