import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import React from "react";

export default function SearchForm() {
  return (
    <form className="max-w-md mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>

      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg 
                     bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search companies..."
          required
        />

        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 
                     focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                     rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}
