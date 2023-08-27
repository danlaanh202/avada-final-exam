import React from "react";

import "./DesktopPositionInput.css";
import { Stack, Labelled, TextStyle } from "@shopify/polaris";

const defaultOptions = [
  { label: "Bottom left", value: "bottom-left" },
  { label: "Bottom right", value: "bottom-right" },
  { label: "Top left", value: "top-left" },
  { label: "Top right", value: "top-right" },
];

const DesktopPositionInput = ({
  label,
  value,
  onChange,
  helpText,
  options = defaultOptions,
}) => {
  return (
    <Labelled label={label}>
      <Stack gap={4}>
        {options.map((option, key) => (
          <div
            key={key}
            className={`Avada-DesktopPosition ${
              value === option.value ? "Avada-DesktopPosition--selected" : ""
            }`}
            onClick={() => onChange("position", option.value)}
          >
            <div
              className={`Avada-DesktopPosition__Input Avada-DesktopPosition__Input--${option.value}`}
            ></div>
          </div>
        ))}
      </Stack>
      <TextStyle variation="subdued">{helpText}</TextStyle>
    </Labelled>
  );
};

export default DesktopPositionInput;
