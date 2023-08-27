import { Card, RangeSlider } from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function MyRangeSlider({
  label,
  suffixUnit = "second(s)",
  rangeValue = 32,
  onChange,
  sliderId = "",
}) {
  const suffixMarkup = (
    <div className="suffix-markup">
      {rangeValue} {suffixUnit}
    </div>
  );
  return (
    <RangeSlider
      id={sliderId}
      label={label}
      value={rangeValue}
      onChange={(val, id) => onChange(id, val)}
      suffix={suffixMarkup}
      output
    />
  );
}
