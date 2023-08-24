import { LegacyCard, LegacyTabs } from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";
import DisplaySetting from "./DisplaySetting/DisplaySetting";
import TriggersSetting from "./TriggersSetting";

import tabs from "../../helpers/constants/tabs";
export default function SettingsTab({ settings, handleChangeInput }) {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const settingMarkup =
    selected === 0 ? (
      <DisplaySetting
        settings={settings}
        handleChangeInput={handleChangeInput}
      />
    ) : (
      <TriggersSetting
        handleChangeInput={handleChangeInput}
        settings={settings}
      />
    );
  return (
    <LegacyCard>
      <LegacyTabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <LegacyCard.Section>{settingMarkup}</LegacyCard.Section>
      </LegacyTabs>
    </LegacyCard>
  );
}
