import React from "react";
import SearchForm from "./search";
import SortingDropdown from "./dropdown";

function Header() {
  return (
    <div className="w-full h-auto flex items-center justify-center gap-4">
      <div className="w-full max-w-md">
        <SearchForm />
      </div>
      <SortingDropdown />
    </div>
  );
}

export default Header;

