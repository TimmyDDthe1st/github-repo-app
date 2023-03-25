export interface Currencies {
	[key: string]: string;
}

export const getRate = async (currency1: string, currency2: string) => {
  const response = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${currency1}`
  );
  const data = await response.json();
  return data.rates[currency2];
};
