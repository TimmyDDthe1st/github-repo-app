import CurrencyConverter from "@/components/CurrencyConverter";
import Title from "../components/Title";
import { Currencies } from "./api/currencies";
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
  const res = await fetch("https://openexchangerates.org/api/currencies.json");
  const currencies = await res.json();
  return {
    props: {
      currencies,
    },
  };
};
