export default function getFlagImageUrl(currencyCode: string): string {
    const countryCode = currencyCode.substring(0, 2).toLowerCase();
    try {
      return `https://flagcdn.com/32x24/${countryCode}.png`;
    } catch {
      return "";
    }
  }
