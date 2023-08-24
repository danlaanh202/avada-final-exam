import { Text, VerticalStack } from "@shopify/polaris";
import DesktopPositionInput from "../DesktopPositionInput/DesktopPositionInput";
import MyCheckbox from "../../ui/MyCheckbox";
import SettingSliderItem from "./SettingSliderItem";
import defaultSettings from "../../../helpers/constants/defaultSettings";
const sliderSettings = [
  {
    label: "Display duration",
    description: "How long each pop will display on your page",
    suffixUnit: "second(s)",
    min: 0,
    max: 10,
    stateKey: "displayDuration",
  },
  {
    label: "Time before the first pop",
    description: "The delay time before the first notification",
    suffixUnit: "second(s)",
    stateKey: "firstDelay",
  },
  {
    label: "Gap time between two pops",
    description: "The time interval between two popup notifications",
    suffixUnit: "second(s)",
    stateKey: "popsInterval",
  },
  {
    label: "Maximum of popups",
    description:
      "The maximum number of popups are allowed to show after page loading. Maximum number is 80",
    suffixUnit: "pop(s)",
    stateKey: "maxPopsDisplay",
  },
];
const DisplaySetting = ({ settings = defaultSettings, handleChangeInput }) => {
  return (
    <VerticalStack gap={4}>
      <Text as="h4" variant="headingXs">
        APPEARANCE
      </Text>
      <DesktopPositionInput
        label="Desktop Position"
        value={settings.position}
        helpText="The display position of the pop on the website"
        key={settings.position}
        onChange={handleChangeInput}
      />

      <MyCheckbox
        label="Hide time ago"
        onChange={() =>
          handleChangeInput("hideTimeAgo", !settings?.hideTimeAgo)
        }
        checked={settings?.hideTimeAgo}
      />
      <MyCheckbox
        label="Truncate content text"
        helptext="If your product name is long for one line, it will be truncated to 'Product na..'"
        checked={settings?.truncateProductName}
        onChange={() =>
          handleChangeInput(
            "truncateProductName",
            !settings?.truncateProductName
          )
        }
      />
      <Text as="h4" variant="headingXs">
        TIMING
      </Text>
      <VerticalStack align="space-between" gap={4}>
        {sliderSettings?.length > 0 &&
          sliderSettings.map(
            (item, index, arr) =>
              !(index % 2) && (
                <div className="slider-wrapper" key={item.description}>
                  <div className="slider-item-wrapper">
                    <SettingSliderItem
                      onChange={handleChangeInput}
                      rangeValue={settings[arr[index].stateKey]}
                      label={arr[index].label}
                      description={arr[index].description}
                      suffixUnit={arr[index].suffixUnit}
                      sliderId={arr[index].stateKey}
                    />
                  </div>
                  <div className="slider-item-wrapper">
                    {index + 1 !== sliderSettings.length && (
                      <SettingSliderItem
                        onChange={handleChangeInput}
                        rangeValue={settings[arr[index + 1].stateKey]}
                        label={arr[index + 1].label}
                        description={arr[index + 1].description}
                        suffixUnit={arr[index + 1].suffixUnit}
                        sliderId={arr[index + 1].stateKey}
                      />
                    )}
                  </div>
                </div>
              )
          )}
      </VerticalStack>
    </VerticalStack>
  );
};

export default DisplaySetting;
