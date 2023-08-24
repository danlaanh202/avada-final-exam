import { Checkbox, Text } from "@shopify/polaris";
import { useState, useCallback } from "react";

const MyCheckbox = ({
  label = "",
  helptext = "",
  onChange = () => {},
  checked = false,
}) => {
  return (
    <div className="checkbox-wrapper">
      <Checkbox label={label} checked={checked} onChange={onChange} />
      {helptext && (
        <div className="helptext-wrapper">
          <Text color="subdued">{helptext}</Text>
        </div>
      )}
    </div>
  );
};

export default MyCheckbox;
