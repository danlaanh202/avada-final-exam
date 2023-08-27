import { TextStyle, Stack } from "@shopify/polaris";
import MyRangeSlider from "../../ui/MyRangeSlider";

const SettingSliderItem = ({
  label,
  description,
  suffixUnit,
  rangeValue,
  sliderId,
  onChange,
}) => {
  return (
    <Stack vertical>
      <MyRangeSlider
        label={label}
        suffixUnit={suffixUnit}
        rangeValue={rangeValue}
        sliderId={sliderId}
        onChange={onChange}
      />
      <TextStyle variant="bodySm" as="span" color="subdued">
        {description}
      </TextStyle>
    </Stack>
  );
};

export default SettingSliderItem;
