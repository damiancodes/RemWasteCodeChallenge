import React from 'react';
import { FaMapMarkerAlt, FaTrash, FaTruck } from 'react-icons/fa';

const steps = [
  { label: 'Location', icon: <FaMapMarkerAlt className="w-3 h-3" /> },
  { label: 'Waste', icon: <FaTrash className="w-3 h-3" /> },
  { label: 'Skip', icon: <FaTruck className="w-3 h-3" /> },
];

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center py-4 px-1 sm:px-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-2 mb-3">
        <img src="/assets/svg/recycle-solid.svg" alt="Recycle" className="w-7 h-7 text-orange-400" />
        <span className="text-xl font-bold tracking-tight">RemWaste.com</span>
      </div>
      <div className="flex flex-row items-center gap-0 w-full justify-around">
        {steps.map((step, idx) => (
          <div key={step.label} className="flex items-center">
            <div className={`flex items-center gap-0.5 px-0.5 py-1 rounded-full text-[0.65rem] font-semibold text-center
              ${step.label === 'Skip' ? 'bg-orange-400 text-black shadow' : 'bg-gray-200 text-gray-500'}`}
            >
              <span>{React.cloneElement(step.icon, { className: "w-7 h-7" })}</span>
              <span className="min-w-0">{step.label}</span>
            </div>
            {idx < steps.length - 1 && (
              <div className="w-1 h-0.5 bg-gray-200 mx-0.5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;  