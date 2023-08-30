import { Checkbox } from "@shopify/polaris";

const MyCheckbox = ({
  label = "",
  helptext = "",
  onChange = () => {},
  checked = false,
}) => {
  return (
    <Checkbox
      label={label}
      checked={checked}
      helpText={helptext}
      onChange={onChange}
    />
  );
};

export default MyCheckbox;
