import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectComponent({
  input_label_id,
  input_label_title,
  label,
  value,
  setValue,
  options,
}) {
  return (
    <FormControl fullWidth focused sx={{ marginTop: 2 }}>
      <InputLabel id={`${input_label_id}-label`}>
        {input_label_title}
      </InputLabel>
      <Select
        labelId={`${input_label_id}-label`}
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((o) => (
          <MenuItem key={o.id} value={o.id}>
            {o.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
