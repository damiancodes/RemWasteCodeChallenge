import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import skip4 from '/src/assets/skip-images/4-yarder-skip.jpg';
import skip5 from '/src/assets/skip-images/5-yarder-skip.jpg';
import skip6 from '/src/assets/skip-images/6-yarder-skip.jpg';
import skip8 from '/src/assets/skip-images/8-yarder-skip.jpg';
import skip10 from '/src/assets/skip-images/10-yarder-skip.jpg';
import skip12 from '/src/assets/skip-images/12-yarder-skip.jpg';
import skip14 from '/src/assets/skip-images/14-yarder-skip.jpg';
import skip16 from '/src/assets/skip-images/16-yarder-skip.jpg';
import skip20 from '/src/assets/skip-images/20-yarder-skip.jpg';
import skip40 from '/src/assets/skip-images/40-yarder-skip.jpg';
import fallbackSkip from '/src/assets/skip-images/fallback-skip.png';

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
  { size: 4, description: 'Midi Skip, small jobs, 30-40 bin bags' },
  { size: 5, description: 'Small-medium projects, 40-50 bin bags' },
  { size: 6, description: 'Builders Skip, hardcore, 50-60 bin bags' },
  { size: 8, description: 'Popular Builders Skip, hardcore, 60-80 bin bags' },
  { size: 10, description: 'Big cleanouts, bulky waste, 80-100 bin bags' },
  { size: 12, description: 'Maxi Skip, house/business clearouts, 100-120 bin bags' },
  { size: 14, description: 'Large projects, commercial, 120-140 bin bags' },
  { size: 16, description: 'Major projects, commercial, 140-160 bin bags' },
  { size: 20, description: 'Roll-on/off, light construction, 160-200 bin bags' },
  { size: 40, description: 'Largest, commercial, light waste, 350-400 bin bags' },
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

  return (
    <>
      <div className="bg-white rounded-xl shadow p-6 mb-10 flex flex-col md:flex-row md:items-center md:justify-between border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-auto">
          {/* Road Placement Filter */}
          <div>
            <label className="block text-black font-bold mb-1">Road Placement</label>
            <div className="relative">
              <select
                className="border rounded-lg px-3 py-2 w-full md:w-auto bg-gray-100 text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                className="border rounded-lg px-3 py-2 w-full md:w-auto bg-gray-100 text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                className="border rounded-lg px-3 py-2 w-full md:w-auto bg-gray-100 text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
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
            className="text-orange-500 hover:text-orange-600 font-semibold text-sm cursor-pointer"
          >
            View Size Guide
          </span>
          <div className="text-gray-500 text-sm md:text-right">
            Showing {filteredCount} of {totalCount} skip options
          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full p-8 shadow-2xl border border-gray-100 relative">
            <button
              onClick={() => setShowSizeGuide(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-orange-500 mb-6">Skip Size Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skipSizes.map(({ size, description }) => (
                <div key={size} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={skipImages[size] || fallbackSkip}
                    alt={`${size} yard skip`}
                    className="w-20 h-16 object-contain flex-shrink-0"
                  />
                  <div>
                    <div className="bg-orange-500 text-white font-bold px-3 py-1 rounded-lg inline-block text-sm mb-1">
                      {size} yd
                    </div>
                    <p className="text-gray-700">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterBar; 