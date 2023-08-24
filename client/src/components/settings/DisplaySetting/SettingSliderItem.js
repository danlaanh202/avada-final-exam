import { Text, VerticalStack } from "@shopify/polaris";
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
    <VerticalStack gap={2} align="start">
      <MyRangeSlider
        label={label}
        suffixUnit={suffixUnit}
        rangeValue={rangeValue}
        sliderId={sliderId}
        onChange={onChange}
      />
      <Text variant="bodySm" as="span" color="subdued">
        {description}
      </Text>
    </VerticalStack>
  );
};

export default SettingSliderItem;
