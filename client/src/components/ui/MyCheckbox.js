import { Checkbox, TextStyle } from "@shopify/polaris";

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
          <TextStyle color="subdued">{helptext}</TextStyle>
        </div>
      )}
    </div>
  );
};

export default MyCheckbox;
