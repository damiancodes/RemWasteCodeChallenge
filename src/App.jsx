import React, { useState } from 'react';
import { useSkips } from './hooks/useSkips';
import SkipCard from './components/SkipCard/SkipCard';
import Header from './components/layout/Header/Header';
import FilterBar from './components/features/FilterBar/FilterBar';

function App() {
  const { skips, loading, error } = useSkips();
  const [selectedSkip, setSelectedSkip] = useState(null);

  // Filter state
  const [roadPlacement, setRoadPlacement] = useState('all');
  const [heavyWaste, setHeavyWaste] = useState('all');
  const [sizeRange, setSizeRange] = useState('all');

  const handleSkipSelect = (skip) => {
    setSelectedSkip(skip);
  };

  const closeModal = () => setSelectedSkip(null);

  // Filtering logic
  const filteredSkips = skips.filter((skip) => {
    let roadMatch = roadPlacement === 'all' || (roadPlacement === 'road' ? skip.allowed_on_road : !skip.allowed_on_road);
    let heavyMatch = heavyWaste === 'all' || (heavyWaste === 'yes' ? skip.allows_heavy_waste : !skip.allows_heavy_waste);
    let sizeMatch =
      sizeRange === 'all' ||
      (sizeRange === 'small' && skip.size <= 8) ||
      (sizeRange === 'medium' && skip.size > 8 && skip.size <= 14) ||
      (sizeRange === 'large' && skip.size > 14);
    return roadMatch && heavyMatch && sizeMatch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center py-16">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
                <p className="text-xl text-gray-400">Loading skip options...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-16">
              <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-md mx-auto">
                <strong className="font-bold">Error loading skips:</strong>
                <span className="block sm:inline"> {error}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="py-4 px-4">
        <div className="max-w-full sm:max-w-7xl mx-auto">
          <FilterBar
            roadPlacement={roadPlacement}
            setRoadPlacement={setRoadPlacement}
            heavyWaste={heavyWaste}
            setHeavyWaste={setHeavyWaste}
            sizeRange={sizeRange}
            setSizeRange={setSizeRange}
            filteredCount={filteredSkips.length}
            totalCount={skips.length}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkips.map((skip) => (
              <SkipCard 
                key={skip.id} 
                skip={skip} 
                onSelect={handleSkipSelect}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Skip Selection Modal */}
      {selectedSkip && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white text-gray-900 rounded-xl max-w-md w-full p-8 shadow-2xl border border-gray-100 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-orange-500 mb-2">{selectedSkip.size} Yard Skip Selected</h2>
            <p className="text-gray-700 mb-4">You have selected the <span className="font-semibold">{selectedSkip.size} Yard Skip</span> for <span className="text-orange-500 font-bold">£{selectedSkip.finalPrice}</span>.</p>
            <ul className="mb-4 text-gray-600 text-sm list-disc pl-5">
              <li>Hire period: {selectedSkip.hire_period_days} days</li>
              {selectedSkip.allowed_on_road && <li>Allowed on road</li>}
              {selectedSkip.allows_heavy_waste && <li>Can take heavy waste</li>}
            </ul>
            <button
              onClick={closeModal}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mt-2"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
