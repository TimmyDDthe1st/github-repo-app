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

const TypographyStyle = {
  color: "white",
  p: 1,
};

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
          setShowConversionCard(false);
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        minWidth: "20px",
        mx: "auto",
        my: 2,
        borderStyle: "solid",
        borderColor: "primary.light",
        borderWidth: "5px",
        backgroundColor: "primary.main",
      }}
    >
      <>
        {minutes === 0 && seconds === 0 ? (
          <>
            <Typography color="white">Rate has expired</Typography>
          </>
        ) : (
          <>
            <Typography noWrap sx={TypographyStyle}>
              Expires in:&nbsp;
            </Typography>
            <Typography noWrap sx={TypographyStyle}>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </Typography>
          </>
        )}
      </>
    </Box>
  );
}
