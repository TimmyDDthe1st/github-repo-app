import getServiceBaseUrl from "@/utils/getServiceBaseUrl";

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

interface CurrenciesResponse {
  [key: string]: string;
}

export const getRate = async (currency1: string, currency2: string) => {
  const response = await fetch(getServiceBaseUrl("rates") + currency1.toUpperCase());
  const data: RateResponse = await response.json();
  return data.rates[currency2];
};

export const getAllCurrencies = async () => {
  const response = await fetch(getServiceBaseUrl("currencies"));
  const currencies: CurrenciesResponse = await response.json();
  return currencies;
};
