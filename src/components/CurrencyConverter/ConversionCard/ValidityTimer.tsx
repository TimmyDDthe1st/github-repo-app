import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface ValidityTimerProps {
  initialMinute: number;
  initialSeconds: number;
  amount: number;
  currency1: string;
  currency2: string;
  setShowConversionCard: (value: boolean) => void;
}

export default function ValidityTimer({
  initialMinute,
  initialSeconds,
  amount,
  currency1,
  currency2,
  setShowConversionCard,
}: ValidityTimerProps) {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    setMinutes(initialMinute);
    setSeconds(initialSeconds);
  }, [amount, initialMinute, initialSeconds, currency1, currency2]);

  useEffect(() => {
    const currentInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(currentInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(currentInterval);
    };
  }, [minutes, seconds]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <>
        <Typography>Expires in&nbsp;</Typography>
        {minutes === 0 && seconds === 0 ? (
          setShowConversionCard(false)
        ) : (
          <Typography>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </Typography>
        )}
      </>
    </Box>
  );
}
