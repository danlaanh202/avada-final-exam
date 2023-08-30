import { RangeSlider } from "@shopify/polaris";

export default function MyRangeSlider({
  label,
  suffixUnit = "second(s)",
  rangeValue = 32,
  onChange,
  sliderId = "",
  helpText = "",
}) {
  const suffixMarkup = `${rangeValue} ${suffixUnit}`;
  return (
    <RangeSlider
      id={sliderId}
      label={label}
      value={rangeValue}
      onChange={(val, id) => onChange(id, val)}
      suffix={suffixMarkup}
      output
      helpText={helpText}
    />
  );
}
