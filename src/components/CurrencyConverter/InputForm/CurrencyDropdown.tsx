import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ReactNode, useState } from "react";
import FallbackCountryImage from "@/components/FallbackCountryImage";

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
  function getFlagImageUrl(currencyCode: string) {
    const countryCode = currencyCode.substring(0, 2).toLowerCase();
    try {
      return `https://flagcdn.com/32x24/${countryCode}.png`;
    } catch {
      return "";
    }
  }

  return (
    <Select name={name} onChange={handleChange} value={value} sx={{ my: 1 }}>
      {Object.keys(currencies).map((currency) => (
        <MenuItem key={currency} value={currency}>
          <FallbackCountryImage src={getFlagImageUrl(currency)} />
          {currency}/{currencies[currency]}
        </MenuItem>
      ))}
    </Select>
  );
}
