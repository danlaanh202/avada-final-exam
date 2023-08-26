import { LegacyCard, LegacyTabs } from "@shopify/polaris";
import { useState, useCallback, useEffect, useLayoutEffect } from "react";
import DisplaySetting from "./DisplaySetting/DisplaySetting";
import TriggersSetting from "./TriggersSetting";

import tabs from "../../helpers/constants/tabs";
import { useSearchParams } from "react-router-dom";
export default function SettingsTab({ settings, handleChangeInput }) {
  const [searchParams] = useSearchParams();
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );
  useEffect(() => {
    window.history.pushState(null, null, `?tab=${selected}`);
  }, [selected]);
  useLayoutEffect(() => {
    handleTabChange(parseInt(searchParams.get("tab") ?? 0));
  }, []);
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
