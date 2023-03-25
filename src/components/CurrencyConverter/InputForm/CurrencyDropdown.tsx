import {
  Autocomplete,
  Box,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
} from "@mui/material";
import { ReactNode, useEffect } from "react";
import FallbackCountryImage from "@/components/FallbackCountryImage";
import getFlagImageUrl from "@/utils/getFlagImage";

interface CurrencyDropdownProps {
  currencies: {
    [key: string]: string;
  };
  value: string;
  handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  name: string;
  setShowConversionCard: (value: boolean) => void;
}

export default function CurrencyDropdown({
  currencies,
  value,
  handleChange,
  name,
  setShowConversionCard,
}: CurrencyDropdownProps) {
  useEffect(() => {
    setShowConversionCard(false);
  }, [value, setShowConversionCard]);

  return (
    <>
      <Select name={name} onChange={handleChange} value={value} sx={{ my: 1 }}>
        {Object.keys(currencies).map((currency) => (
          <MenuItem key={currency} value={currency}>
            <FallbackCountryImage src={getFlagImageUrl(currency)} />
            {currency}/{currencies[currency]}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
