import { Card } from "@mui/material";
import Form from "./InputForm/Form";
import { Currencies } from "@/pages/api/currencies";

interface CurrencyConverterProps {
  currencies: Currencies;
}

export default function CurrencyConverter({
  currencies,
}: CurrencyConverterProps) {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", p: 3 }}>
      <Form currencies={currencies} />
    </Card>
  );
}
