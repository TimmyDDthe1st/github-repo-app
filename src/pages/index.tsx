import CurrencyConverter from "@/components/CurrencyConverter";
import Title from "../components/Title";
import { Currencies, getAllCurrencies } from "./api/currencies";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";

interface HomeProps {
  currencies: Currencies;
}

export default function Home({ currencies }: HomeProps) {
  return (
    <ThemeProvider theme={theme}>
      <Title title="Convert your currency!" />
      <CurrencyConverter currencies={currencies} />
    </ThemeProvider>
  );
}

export const getStaticProps = async () => {
  try {
    const currencies = await getAllCurrencies();
    return {
      props: {
        currencies,
      },
    };
  } catch {
    return {
      props: {
        currencies: {
          GBP: "British Pound Sterling",
          USD: "United States Dollar",
        },
      },
    };
  }
};
