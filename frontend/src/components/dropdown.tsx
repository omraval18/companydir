import React, { useState } from "react";
import { SortAscending } from "@phosphor-icons/react";
import type { SortOption } from "../types/company";

type SortingDropdownProps = {
  sortBy: SortOption;
  onSortChange: (option: SortOption) => void;
};

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "name", label: "Company Name (A-Z)" },
  { value: "employees", label: "Employees (High to Low)" },
  { value: "founded", label: "Year Founded (Newest)" },
  { value: "industry", label: "Industry (A-Z)" },
];

const SortingDropdown: React.FC<SortingDropdownProps> = ({ sortBy, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSort = (option: SortOption) => {
    onSortChange(option);
    setIsOpen(false);
  };

  const currentLabel = sortOptions.find((opt) => opt.value === sortBy)?.label || "Sort By";

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100"
        type="button"
      >
        <SortAscending className="w-4 h-4" />
        Sort
        <svg
          className="w-2.5 h-2.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-56 mt-2">
          <ul className="py-2 text-sm text-gray-700">
            {sortOptions.map((option) => (
              <li key={option.value}>
                <button
                  onClick={() => handleSort(option.value)}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                    sortBy === option.value ? "bg-gray-50 font-medium" : ""
                  }`}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortingDropdown;
