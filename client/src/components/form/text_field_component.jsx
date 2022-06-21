import { TextField } from "@mui/material";

export default function TextFieldComponent({
  label,
  placeholder,
  autoFocus,
  value,
  setValue,
}) {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      fullWidth
      required
      margin="normal"
      focused
      autoFocus={autoFocus}
      value={value}
      onChange={({ target }) => setValue(target.value)}
    />
  );
}
