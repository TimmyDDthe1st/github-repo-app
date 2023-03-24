import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

interface CurrencyDropdownProps {
  currencies: {
    [key: string]: string;
  };
  value: string;
  handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  name: string;
}

export default function CurrencyDropdown({
  currencies,
  value,
  handleChange,
  name,
}: CurrencyDropdownProps) {
  return (
    <Select name={name} onChange={handleChange} value={value}>
      {Object.keys(currencies).map((currency) => (
        <MenuItem key={currency} value={currency}>
          {currency}/{currencies[currency]}
        </MenuItem>
      ))}
    </Select>
  );
}
