import { Button, TextField, IconButton } from "@mui/material";
import { Repeat } from "@mui/icons-material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import ConversionCard from "../ConversionCard/ConversionCard";
import CurrencyDropdown from "./CurrencyDropdown";
import { getRate } from "@/pages/api/currencies";

const inputSchema = yup.object({
  amount: yup
    .number()
    .required("This field is required")
    .typeError("This is not a valid number")
    .min(0.01, "You can convert a minimum of 0.01")
    .max(1000000, "You can convert a maximum of 1,000,000"),
  currency1: yup.string().required("This field is required"),
  currency2: yup.string().required("This field is required"),
});

interface FormValues {
  amount: number;
  currency1: string;
  currency2: string;
}

interface FormProps {
  currencies: {
    [key: string]: string;
  };
}

export default function Form({ currencies }: FormProps) {
  const [rate, setRate] = useState(0);
  const [showConversionCard, setShowConversionCard] = useState(false);

  const initialValues: FormValues = {
    amount: 0,
    currency1: "GBP",
    currency2: "USD",
  };

  const {
    values,
    handleChange,
    errors,
    touched,
    isValid,
    submitForm,
    setFieldValue,
  } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        setRate(await getRate(values.currency1, values.currency2));
        setShowConversionCard(true);
      } catch {
        errors.amount = "Couldn't get the rate, please try again...";
      }
    },
    validationSchema: inputSchema,
  });

  const handleCurrencySwap = () => {
    setFieldValue("currency1", values.currency2);
    setFieldValue("currency2", values.currency1);
    setShowConversionCard(false);
  };

  useEffect(() => {
    setShowConversionCard(false);
  }, [values.amount]);

  return (
    <>
      <TextField
        variant="filled"
        label="Amount"
        name="amount"
        onChange={handleChange}
        helperText={errors.amount && touched ? errors.amount : null}
        error={!!errors.amount}
        InputProps={{
          endAdornment: (
            <IconButton
              data-testid="switch-currencies"
              onClick={handleCurrencySwap}
              sx={{ color: "secondary.main" }}
            >
              <Repeat />
            </IconButton>
          ),
        }}
      />
      <CurrencyDropdown
        currencies={currencies}
        value={values.currency1}
        handleChange={handleChange}
        name="currency1"
        setShowConversionCard={setShowConversionCard}
      />
      <CurrencyDropdown
        currencies={currencies}
        value={values.currency2}
        handleChange={handleChange}
        name="currency2"
        setShowConversionCard={setShowConversionCard}
      />
      {showConversionCard && Object.values(errors).length === 0 && (
        <ConversionCard
          rate={rate}
          amount={values.amount}
          currency1={values.currency1}
          currency2={values.currency2}
          setShowConversionCard={setShowConversionCard}
        />
      )}
      <Button
        variant="contained"
        disabled={!isValid || values.amount === 0}
        onClick={submitForm}
        sx={{ borderRadius: 5, my: 2 }}
      >
        Convert
      </Button>
    </>
  );
}
