import { Box } from "@mui/material";
import ConversionRate from "./ConversionRate";
import ValidityTimer from "./ValidityTimer";

interface ConversionCardProps {
  amount: number;
  rate: number;
  currency1: string;
  currency2: string;
  setShowConversionCard: (value: boolean) => void;
}

export default function ConversionCard({
  amount,
  rate,
  currency1,
  currency2,
  setShowConversionCard,
}: ConversionCardProps) {
  return (
    <Box>
      <ConversionRate
        rate={rate}
        amountToConvert={amount}
        currency1={currency1}
        currency2={currency2}
      />
      <ValidityTimer
        initialMinute={10}
        initialSeconds={0}
        amount={amount}
        currency1={currency1}
        currency2={currency2}
        setShowConversionCard={setShowConversionCard}
      />
    </Box>
  );
}
