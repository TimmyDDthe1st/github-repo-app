export default function getServiceBaseUrl(service: 'currencies' | 'rates'): string {
	if (service === 'currencies') {
		return 'https://openexchangerates.org/api/currencies.json'
	}
	if (service === 'rates') {
		return 'https://api.exchangerate-api.com/v4/latest/'
	}
	return 'No service found'
}
