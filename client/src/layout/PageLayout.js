import {
  Frame,
  Navigation,
  TopBar,
  Avatar,
  Text,
  HorizontalStack,
} from "@shopify/polaris";
import {
  HomeFilledMinor,
  NotificationFilledMajor,
  SettingsFilledMinor,
} from "@shopify/polaris-icons";

import { useLocation, useNavigate } from "react-router-dom";

export default function PageLayout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const userMenuMarkup = (
    <TopBar.UserMenu
      customActivator={
        <HorizontalStack wrap={false} blockAlign="center" gap={2}>
          <Avatar size="small" initials="A" />
          <Text>Avada</Text>
        </HorizontalStack>
      }
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
            icon: HomeFilledMinor,
            selected: pathname === "/",
            onClick: () => navigate("/"),
          },
          {
            url: "/notifications",
            label: "Notifications",
            icon: NotificationFilledMajor,
            selected: pathname?.includes("/notifications"),
            onClick: () => navigate("/notifications"),
          },
          {
            url: "/settings",
            label: "Settings",
            icon: SettingsFilledMinor,
            selected: pathname?.includes("/settings"),
            onClick: () => navigate("/settings"),
          },
        ]}
      />
    </Navigation>
  );

  return (
    <Frame
      logo={{
        width: 124,
        topBarSource: "https://i.imgur.com/LTYRxl7.png",
        contextualSaveBarSource: "https://i.imgur.com/LTYRxl7.png",
        url: "#",
        accessibilityLabel: "Logo",
      }}
      topBar={topBarMarkup}
      navigation={navigationMarkup}
    >
      {children}
    </Frame>
  );
}
