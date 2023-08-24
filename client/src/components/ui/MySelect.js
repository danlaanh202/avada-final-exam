import { Select } from "@shopify/polaris";

export default function MySelect({
  value = "all",
  id = "",
  label = "",
  handleChangeValue = () => {},
}) {
  const options = [
    { label: "All pages", value: "all" },
    { label: "Specific pages", value: "specific" },
  ];

  return (
    <Select
      id={id}
      label={label}
      options={options}
      onChange={(selected, id) => handleChangeValue(id, selected)}
      value={value}
    />
  );
}
