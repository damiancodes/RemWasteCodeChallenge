
import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import skip4 from '../../../assets/skip-images/4-yarder-skip.jpg';
import skip5 from '../../../assets/skip-images/5-yarder-skip.jpg';
import skip6 from '../../../assets/skip-images/6-yarder-skip.jpg';
import skip8 from '../../../assets/skip-images/8-yarder-skip.jpg';
import skip10 from '../../../assets/skip-images/10-yarder-skip.jpg';
import skip12 from '../../../assets/skip-images/12-yarder-skip.jpg';
import skip14 from '../../../assets/skip-images/14-yarder-skip.jpg';
import skip16 from '../../../assets/skip-images/16-yarder-skip.jpg';
import skip20 from '../../../assets/skip-images/20-yarder-skip.jpg';
import skip40 from '../../../assets/skip-images/40-yarder-skip.jpg';
import fallbackSkip from '../../../assets/skip-images/fallback-skip.png';

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

const sizeRanges = [
  { label: 'All Sizes', value: 'all' },
  { label: 'Small (≤8 yd)', value: 'small' },
  { label: 'Medium (9-14 yd)', value: 'medium' },
  { label: 'Large (15+ yd)', value: 'large' },
];

const skipSizes = [
  { size: 4, description: 'Midi Skip - small domestic jobs', bags: '30-40 bin bags' },
  { size: 5, description: 'Small-medium projects, bathroom renovation', bags: '40-50 bin bags' },
  { size: 6, description: 'Builders Skip - great for hardcore waste', bags: '50-60 bin bags' },
  { size: 8, description: 'Most popular Builders Skip - hardcore waste', bags: '60-80 bin bags' },
  { size: 10, description: 'Big cleanouts and bulky waste', bags: '80-100 bin bags' },
  { size: 12, description: 'Maxi Skip - large house/business clear outs', bags: '100-120 bin bags' },
  { size: 14, description: 'Large projects, shop renovation', bags: '120-140 bin bags' },
  { size: 16, description: 'Major projects, construction work', bags: '140-160 bin bags' },
  { size: 20, description: 'Roll-on/off - light construction & demolition', bags: '160-200 bin bags' },
  { size: 40, description: 'Largest commercial skip - large light waste', bags: '350-400 bin bags' },
];

const FilterBar = ({
  roadPlacement,
  setRoadPlacement,
  heavyWaste,
  setHeavyWaste,
  sizeRange,
  setSizeRange,
  filteredCount,
  totalCount
}) => {
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  useEffect(() => {
    if (showSizeGuide) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSizeGuide]);

  return (
    <>
      <div className="bg-white rounded-xl shadow p-6 mb-10 flex flex-col md:flex-row md:items-center md:justify-between border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-auto">
          {/* Road Placement Filter */}
          <div>
            <label className="block text-black font-bold mb-1">Road Placement</label>
            <div className="relative">
              <select
                className="border rounded-lg px-3 py-2 w-full md:w-auto bg-gray-100 text-gray-900 appearance-none focus:outline-none hover:border-orange-400 hover:bg-orange-50 transition-all duration-200 cursor-pointer"
                value={roadPlacement}
                onChange={e => setRoadPlacement(e.target.value)}
              >
                <option value="all">All Options</option>
                <option value="road">Allowed on Road</option>
                <option value="offroad">Not Allowed on Road</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
          {/* Heavy Waste Filter */}
          <div>
            <label className="block text-black font-bold mb-1">Heavy Waste</label>
            <div className="relative">
              <select
                className="border rounded-lg px-3 py-2 w-full md:w-auto bg-gray-100 text-gray-900 appearance-none focus:outline-none hover:border-orange-400 hover:bg-orange-50 transition-all duration-200 cursor-pointer"
                value={heavyWaste}
                onChange={e => setHeavyWaste(e.target.value)}
              >
                <option value="all">All Options</option>
                <option value="yes">Heavy Waste</option>
                <option value="no">No Heavy Waste</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
          {/* Size Range Filter */}
          <div>
            <label className="block text-black font-bold mb-1">Size Range</label>
            <div className="relative">
              <select
                className="border rounded-lg px-3 py-2 w-full md:w-auto bg-gray-100 text-gray-900 appearance-none focus:outline-none hover:border-orange-400 hover:bg-orange-50 transition-all duration-200 cursor-pointer"
                value={sizeRange}
                onChange={e => setSizeRange(e.target.value)}
              >
                {sizeRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span
            onClick={() => setShowSizeGuide(true)}
            className="text-orange-500 hover:text-orange-600 font-semibold text-sm cursor-pointer transition-colors"
          >
            Size Guide
          </span>
          <div className="text-gray-500 text-sm md:text-right">
            Showing {filteredCount} of {totalCount} skip options
          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-orange-500 text-white p-4 relative">
              <button
                onClick={() => setShowSizeGuide(false)}
                className="absolute top-3 right-3 text-white hover:text-orange-200 text-xl font-bold transition-colors"
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-xl font-bold">Size Guide</h2>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="space-y-3">
                {skipSizes.map(({ size, description, bags }) => (
                  <div key={size} className="bg-white rounded-lg p-4 flex items-center gap-4 sm:gap-6 hover:bg-gray-50 transition-colors">
                    <img
                      src={skipImages[size] || fallbackSkip}
                      alt={`${size} yard skip`}
                      className="w-20 h-16 sm:w-24 sm:h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="bg-orange-500 text-white font-bold px-2 py-1 sm:px-3 sm:py-1 rounded text-sm sm:text-base">
                          {size} {size === 1 ? 'yard' : 'yards'}
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{description}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{bags}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterBar;