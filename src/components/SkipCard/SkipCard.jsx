
import React from 'react';
import skip5 from '../../assets/skip-images/5-yarder-skip.jpg';
import skip6 from '../../assets/skip-images/6-yarder-skip.jpg';
import skip8 from '../../assets/skip-images/8-yarder-skip.jpg';
import skip10 from '../../assets/skip-images/10-yarder-skip.jpg';
import skip16 from '../../assets/skip-images/16-yarder-skip.jpg';
import skip20 from '../../assets/skip-images/20-yarder-skip.jpg';
import skip40 from '../../assets/skip-images/40-yarder-skip.jpg';
import skip4 from '../../assets/skip-images/4-yarder-skip.jpg';
import skip14 from '../../assets/skip-images/14-yarder-skip.jpg';
import skip12 from '../../assets/skip-images/12-yarder-skip.jpg';
import fallbackSkip from '../../assets/skip-images/fallback-skip.png';

const skipImages = {
  4: skip4,
  5: skip5,
  6: skip6,
  8: skip8,
  10: skip10,
  12: skip12,
  14: skip14,
  16: skip16,
  20: skip20,
  40: skip40,
};

const SkipCard = ({ skip, onSelect, darkMode }) => {
  const { size, finalPrice, hire_period_days, description, allowed_on_road, allows_heavy_waste, isPopular } = skip;

  const getSkipSize = (size) => {
    const sizes = {
      4: 'w-16 h-10',
      6: 'w-20 h-12', 
      8: 'w-24 h-14',
      10: 'w-28 h-16',
      12: 'w-32 h-20',
      14: 'w-36 h-24',
      16: 'w-40 h-28',
      20: 'w-44 h-32',
      40: 'w-48 h-36'
    };
    return sizes[size] || 'w-20 h-12';
  };

  const getSkipDescription = (size) => {
    const descriptions = {
      4: 'Midi Skip, small jobs, 30-40 bin bags',
      5: 'Small-medium projects, 40-50 bin bags',
      6: 'Builders Skip, hardcore, 50-60 bin bags',
      8: 'Popular Builders Skip, hardcore, 60-80 bin bags',
      10: 'Big cleanouts, bulky waste, 80-100 bin bags',
      12: 'Maxi Skip, house/business clearouts, 100-120 bin bags',
      14: 'Large projects, commercial, 120-140 bin bags',
      16: 'Major projects, commercial, 140-160 bin bags',
      20: 'Roll-on/off, light construction, 160-200 bin bags',
      40: 'Largest, commercial, light waste, 350-400 bin bags',
    };
    return descriptions[size] || 'Perfect for your waste management needs';
  };

  return (
    <div className={`rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative border bg-white text-gray-900 hover:scale-[1.03]`}>
      {/* Skip Image */}
      <div className="relative w-full aspect-[4/2] bg-gray-100 overflow-hidden">
        <img
          src={skipImages[size] || fallbackSkip}
          alt={`${size} yard skip`}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-1">{size} Yard Skip</h3>
        <p className="text-gray-500 text-sm mb-3">{hire_period_days} day hire period</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {allowed_on_road ? (
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Road OK
            </span>
          ) : (
            <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-[11px] font-medium">
              Not Allowed On The Road
            </span>
          )}
          {allows_heavy_waste && (
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Heavy Waste
            </span>
          )}
        </div>
        <div className="mb-4">
          <span className="text-3xl font-bold text-orange-500">£{finalPrice}</span>
          <span className="text-sm text-gray-400 ml-2">inc. VAT</span>
        </div>
        <button 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 transform hover:scale-105 active:scale-95"
          onClick={() => onSelect(skip)}
        >
          Select This Skip
        </button>
      </div>
    </div>
  );
};

export default SkipCard;