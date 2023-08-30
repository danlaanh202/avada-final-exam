import defaultSettings from "../helpers/constants/defaultSettings";
import SettingsTab from "../components/settings/SettingsTab";
import { useState } from "react";
import { Layout, Page, Stack } from "@shopify/polaris";
import { SaveMinor } from "@shopify/polaris-icons";
import { NotificationPopup } from "../components/notification/NotificationPopup/NotificationPopup";

const SettingPage = () => {
  const [settings, setSettings] = useState(defaultSettings);
  const handleChangeInput = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const saveSettings = async () => {
    // SAVE SETTINGS HERE
    console.log("save", settings);
  };
  return (
    <Page
      fullWidth
      title="Settings"
      primaryAction={{
        content: "Save",
        icon: <SaveMinor />,
        onAction: saveSettings,
      }}
    >
      <Layout>
        <Layout.Section secondary>
          <NotificationPopup />
        </Layout.Section>

        <Layout.Section>
          <SettingsTab
            settings={settings}
            handleChangeInput={handleChangeInput}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default SettingPage;
