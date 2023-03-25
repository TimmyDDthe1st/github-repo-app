export interface Currencies {
	[key: string]: string;
}

interface RateResponse {
  rates: {
    [key: string]: number;
  }
  base: string;
  date: string;
  terms: string;
  time_last_updated: number;
}

export const getRate = async (currency1: string, currency2: string) => {
  const response = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${currency1}`
  );
  const data: RateResponse = await response.json();
  return data.rates[currency2];
};
