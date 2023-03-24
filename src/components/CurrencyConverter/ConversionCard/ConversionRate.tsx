import convertCurrency from "@/utils/convertCurrency";
import { Box, Typography } from "@mui/material";

interface ConversionRateProps {
  rate: number;
  amountToConvert: number;
  currency1: string;
  currency2: string;
}

export default function ConversionRate({
  rate,
  amountToConvert,
  currency1,
  currency2,
}: ConversionRateProps) {
  return (
    <Box>
      <Typography>
        {amountToConvert} {currency1} is equivalent to&nbsp;
        {convertCurrency(rate, amountToConvert).toFixed(2)} {currency2}
      </Typography>
    </Box>
  );
}
