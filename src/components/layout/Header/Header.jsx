import React from 'react';
import { FaMapMarkerAlt, FaTrash, FaTruck, FaChevronRight } from 'react-icons/fa';

const steps = [
  { label: 'Location', icon: <FaMapMarkerAlt className="w-4 h-4" /> },
  { label: 'Waste', icon: <FaTrash className="w-4 h-4" /> },
  { label: 'Skip', icon: <FaTruck className="w-4 h-4" /> },
];

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center py-6 px-4 bg-white border-b border-gray-100">
      {}
      <div className="flex items-center gap-2 mb-6">
        <img src="/assets/svg/recycle-solid.svg" alt="Recycle" className="w-7 h-7 text-orange-400" />
        <span className="text-xl font-bold tracking-tight">RemWaste.com</span>
      </div>
      
      {}
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        {steps.map((step, idx) => (
          <React.Fragment key={step.label}>
            <div className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs sm:text-sm font-semibold
              ${step.label === 'Skip' ? 'bg-orange-500 text-white shadow-md' : 'bg-gray-200 text-gray-600'}`}
            >
              <span className="hidden sm:inline">{step.icon}</span>
              <span>{step.label}</span>
            </div>
            {idx < steps.length - 1 && (
              <FaChevronRight className="w-2 h-2 sm:w-3 sm:h-3 text-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Header;