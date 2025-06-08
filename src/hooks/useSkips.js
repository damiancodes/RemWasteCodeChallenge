import { useState, useEffect } from 'react';

const calculateFinalPrice = (priceBeforeVat, vat) => {
  return (priceBeforeVat + vat).toFixed(2);
};

export const useSkips = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSkips = async () => {
      try {
        const response = await fetch('/skips.json');
        if (!response.ok) {
          throw new Error('Failed to fetch skips');
        }
        const data = await response.json();

       
        const transformedSkips = data.map(skip => ({
          ...skip,
          finalPrice: calculateFinalPrice(skip.price_before_vat, skip.vat),
          isPopular: skip.size === 6 
        }));

        setSkips(transformedSkips);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, []);

  return { skips, loading, error };
};
