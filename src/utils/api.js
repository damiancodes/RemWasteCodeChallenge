const API_URL = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

export const fetchSkips = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch skips');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching skips:', error);
    return [];
  }
};

export const calculateFinalPrice = (priceBeforeVat, vat) => {
  return Math.round(priceBeforeVat * (1 + vat / 100));
};
