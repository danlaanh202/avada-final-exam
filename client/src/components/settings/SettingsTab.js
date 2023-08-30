import { Card, Tabs } from "@shopify/polaris";
import { useState, useCallback, useEffect, useLayoutEffect } from "react";
import DisplaySetting from "./DisplaySetting/DisplaySetting";
import TriggersSetting from "./TriggersSetting/TriggersSetting";
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

  const tabs = [
    {
      id: "display",
      content: "Display",
      body: (
        <DisplaySetting
          settings={settings}
          handleChangeInput={handleChangeInput}
        />
      ),
    },
    {
      id: "triggers",
      content: "Triggers",
      body: (
        <TriggersSetting
          handleChangeInput={handleChangeInput}
          settings={settings}
        />
      ),
    },
  ];

  return (
    <Card>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <Card.Section>{tabs[selected].body}</Card.Section>
      </Tabs>
    </Card>
  );
}
