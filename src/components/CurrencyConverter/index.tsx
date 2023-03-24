import { Card } from "@mui/material";
import Form from "./InputForm/Form";

export default function CurrencyConverter({ currencies }: any) {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", p: 3 }}>
      <Form currencies={currencies} />
    </Card>
  );
}
