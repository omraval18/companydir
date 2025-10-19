import React, { useState } from "react";
import { Funnel, X } from "@phosphor-icons/react";

type FilterPanelProps = {
  industries: string[];
  locations: string[];
  selectedIndustry: string;
  selectedLocation: string;
  onIndustryChange: (industry: string) => void;
  onLocationChange: (location: string) => void;
};

const FilterPanel: React.FC<FilterPanelProps> = ({
  industries,
  locations,
  selectedIndustry,
  selectedLocation,
  onIndustryChange,
  onLocationChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClearFilters = () => {
    onIndustryChange("All");
    onLocationChange("All");
  };

  const hasActiveFilters = selectedIndustry !== "All" || selectedLocation !== "All";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100"
      >
        <Funnel className="w-4 h-4" />
        Filters
        {hasActiveFilters && (
          <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-blue-600 rounded-full">
            {(selectedIndustry !== "All" ? 1 : 0) + (selectedLocation !== "All" ? 1 : 0)}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 rounded-lg border border-gray-200 bg-white shadow-lg z-50">
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <h3 className="text-lg font-medium text-gray-900">Filters</h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-900 rounded-lg p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-4">
            <div>
              <label htmlFor="industry-filter" className="block text-sm font-medium text-gray-900 mb-2">
                Industry
              </label>
              <select
                id="industry-filter"
                value={selectedIndustry}
                onChange={(e) => onIndustryChange(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="location-filter" className="block text-sm font-medium text-gray-900 mb-2">
                Location
              </label>
              <select
                id="location-filter"
                value={selectedLocation}
                onChange={(e) => onLocationChange(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-gray-200 p-4">
            <button
              type="button"
              onClick={handleClearFilters}
              disabled={!hasActiveFilters}
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Clear all
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Apply filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;
