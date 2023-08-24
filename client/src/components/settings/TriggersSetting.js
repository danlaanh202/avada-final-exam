import { TextField, VerticalStack } from "@shopify/polaris";
import MySelect from "../ui/MySelect";
import { useEffect } from "react";

const TriggersSetting = ({ settings, handleChangeInput }) => {
  useEffect(() => {
    console.log(settings);
    if (settings.allowShow === "all") {
      handleChangeInput("includedUrls", "");
    }
  }, [settings.allowShow]);
  return (
    <VerticalStack gap={4}>
      <MySelect
        id="allowShow"
        value={settings.allowShow}
        handleChangeValue={handleChangeInput}
        label="PAGE RESTRICTION"
      />
      {!(settings.allowShow === "all") && (
        <TextField
          label="Included pages"
          value={settings.includedUrls}
          onChange={(val) => handleChangeInput("includedUrls", val)}
          multiline={3}
          autoComplete="off"
          helpText="Page URLs NOT to show the pop-up (seperated by new lines)"
        />
      )}
      <TextField
        label="Excluded pages"
        value={settings.excludedUrls}
        onChange={(val) => handleChangeInput("excludedUrls", val)}
        multiline={3}
        autoComplete="off"
        helpText="Page URLs NOT to show the pop-up (seperated by new lines)"
      />
    </VerticalStack>
  );
};

export default TriggersSetting;
