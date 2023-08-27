import defaultSettings from "../helpers/constants/defaultSettings";
import SettingsTab from "../components/settings/SettingsTab";
import { useState } from "react";
import { Page } from "@shopify/polaris";
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
      title="Settings"
      primaryAction={{
        content: "Save",
        icon: <SaveMinor />,
        onAction: saveSettings,
      }}
    >
      <div className="setting-page">
        <NotificationPopup />

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
