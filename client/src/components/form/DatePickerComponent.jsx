import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FormControl, TextField } from "@mui/material";

export default function DatePickerComponent({ value, setValue, label }) {
  return (
    <FormControl fullWidth sx={{ marginTop: 2 }} focused>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label={label}
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </FormControl>
  );
}
