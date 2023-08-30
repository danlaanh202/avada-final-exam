import { TextStyle, Stack, Layout } from "@shopify/polaris";
import DesktopPositionInput from "../DesktopPositionInput/DesktopPositionInput";
import MyCheckbox from "../../ui/MyCheckbox";
import defaultSettings from "../../../helpers/constants/defaultSettings";
import MyRangeSlider from "../../ui/MyRangeSlider";
const sliderSettings = [
  {
    label: "Display duration",
    helpText: "How long each pop will display on your page",
    suffixUnit: "second(s)",
    min: 0,
    max: 10,
    stateKey: "displayDuration",
  },
  {
    label: "Time before the first pop",
    helpText: "The delay time before the first notification",
    suffixUnit: "second(s)",
    stateKey: "firstDelay",
  },
  {
    label: "Gap time between two pops",
    helpText: "The time interval between two popup notifications",
    suffixUnit: "second(s)",
    stateKey: "popsInterval",
  },
  {
    label: "Maximum of popups",
    helpText:
      "The maximum number of popups are allowed to show after page loading. Maximum number is 80",
    suffixUnit: "pop(s)",
    stateKey: "maxPopsDisplay",
  },
];
const DisplaySetting = ({ settings = defaultSettings, handleChangeInput }) => {
  return (
    <Stack vertical>
      <TextStyle variation="strong">APPEARANCE</TextStyle>
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
      <TextStyle variation="strong">TIMING</TextStyle>
      <Layout>
        {sliderSettings?.length > 0 &&
          sliderSettings.map((item) => (
            <Layout.Section key={item.stateKey} oneThird>
              <MyRangeSlider
                onChange={handleChangeInput}
                rangeValue={settings[item.stateKey]}
                label={item.label}
                helpText={item.helpText}
                suffixUnit={item.suffixUnit}
                sliderId={item.stateKey}
              />
            </Layout.Section>
          ))}
      </Layout>
    </Stack>
  );
};

export default DisplaySetting;
// {sliderSettings?.length > 0 &&
//   sliderSettings.map(
//     (item, index, arr) =>
//       !(index % 2) && (
//         <div className="slider-items__wrapper" key={item.helpText}>
//           <div className="slider-item__wrapper">
//             <MyRangeSlider
//               onChange={handleChangeInput}
//               rangeValue={settings[arr[index].stateKey]}
//               label={arr[index].label}
//               helpText={arr[index].helpText}
//               suffixUnit={arr[index].suffixUnit}
//               sliderId={arr[index].stateKey}
//             />
//           </div>
//           <div className="slider-item__wrapper">
//             {index + 1 !== sliderSettings.length && (
//               <MyRangeSlider
//                 onChange={handleChangeInput}
//                 rangeValue={settings[arr[index + 1].stateKey]}
//                 label={arr[index + 1].label}
//                 helpText={arr[index + 1].helpText}
//                 suffixUnit={arr[index + 1].suffixUnit}
//                 sliderId={arr[index + 1].stateKey}
//               />
//             )}
//           </div>
//         </div>
//       )
//   )}
