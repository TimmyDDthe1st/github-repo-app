import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import ConversionCard from "../ConversionCard/ConversionCard";
import CurrencyDropdown from "./CurrencyDropdown";

const amountInputSchema = yup.object({
  amount: yup
    .number()
    .required("This field is required")
    .typeError("This is not a valid number")
    .min(0.01, "You can convert a minimum of 0.01"),
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
  const [showConversionCard, setShowConversionCard] = useState(false);

  const initialValues: FormValues = {
    amount: 0,
    currency1: "GBP",
    currency2: "USD",
  };

  const { values, handleChange, errors, touched, isValid, submitForm } =
    useFormik({
      initialValues,
      onSubmit: (values) => {
        setShowConversionCard(true);
      },
      validationSchema: amountInputSchema,
    });

  return (
    <>
      <TextField
        variant="filled"
        label="Amount"
        name="amount"
        onChange={handleChange}
        helperText={errors.amount && touched ? errors.amount : null}
        error={!!errors.amount}
      />
      <CurrencyDropdown
        currencies={currencies}
        value={values.currency1}
        handleChange={handleChange}
        name="currency1"
      />
      <CurrencyDropdown
        currencies={currencies}
        value={values.currency2}
        handleChange={handleChange}
        name="currency2"
      />
      {showConversionCard && (
        <ConversionCard
          rate={1.12}
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
        sx={{ borderRadius: 5 }}
      >
        Convert
      </Button>
    </>
  );
}
