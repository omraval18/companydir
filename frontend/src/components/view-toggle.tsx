import React from "react";
import { List, Table } from "@phosphor-icons/react";
import type { ViewMode } from "../types/company";

type ViewToggleProps = {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
};

const ViewToggle: React.FC<ViewToggleProps> = ({
  currentView,
  onViewChange,
}) => {
  return (
    <div className="inline-flex rounded-lg border border-gray-200 bg-white">
      <button
        type="button"
        onClick={() => onViewChange("list")}
        className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-l-lg ${
          currentView === "list"
            ? "bg-gray-100 text-gray-900"
            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
        }`}
        aria-label="List view"
      >
        <List className="w-5 h-5" />
        List
      </button>
      <button
        type="button"
        onClick={() => onViewChange("table")}
        className={` items-center hidden md:inline-flex gap-2 px-4 py-2 text-sm font-medium rounded-r-lg border-l border-gray-200 ${
          currentView === "table"
            ? "bg-gray-100 text-gray-900"
            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
        }`}
        aria-label="Table view"
      >
        <Table className="w-5 h-5" />
        Table
      </button>
    </div>
  );
};

export default ViewToggle;
