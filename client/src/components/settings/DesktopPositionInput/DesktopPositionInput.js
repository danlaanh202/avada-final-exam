import React from "react";

import "./DesktopPositionInput.css";
import { HorizontalStack, Labelled, Text } from "@shopify/polaris";

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
      <HorizontalStack gap={4}>
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
      </HorizontalStack>
      <Text variation="subdued">{helpText}</Text>
    </Labelled>
  );
};

export default DesktopPositionInput;
