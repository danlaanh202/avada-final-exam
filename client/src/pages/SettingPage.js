import { Box, Page } from "@shopify/polaris";
import { SaveMinor } from "@shopify/polaris-icons";
import { useState } from "react";
import SettingsTab from "../components/settings/SettingsTab";
import NotificationProductItem from "../components/notification/NotificationProductItem";
import defaultSettings from "../helpers/constants/defaultSettings";

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
      title="Settings"
      primaryAction={{
        content: "Save",
        icon: <SaveMinor />,
        onAction: saveSettings,
      }}
    >
      <div className="setting-page">
        <Box
          as="section"
          paddingInlineStart={{ xs: 4, sm: 0 }}
          paddingInlineEnd={{ xs: 4, sm: 0 }}
        >
          <NotificationProductItem />
        </Box>
        <div className="setting-tab">
          <SettingsTab
            settings={settings}
            handleChangeInput={handleChangeInput}
          />
        </div>
      </div>
    </Page>
  );
};

export default SettingPage;
