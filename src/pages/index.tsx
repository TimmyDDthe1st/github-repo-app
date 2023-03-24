import CurrencyConverter from "@/components/CurrencyConverter";
import Title from "../components/Title";
interface Article {
  body: string;
  id: number;
  title: string;
  userId: number;
}
interface HomeProps {
  currencies: {
    [key: string]: string;
  };
}

export default function Home({ currencies }: any) {
  return (
    <div>
      <Title title="home" />
      <CurrencyConverter currencies={currencies} />
    </div>
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
