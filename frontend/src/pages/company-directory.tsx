import React, { useState } from "react";
import SortingDropdown from "../components/dropdown";
import FilterPanel from "../components/filter-panel";
import ViewToggle from "../components/view-toggle";
import CompanyCard from "../components/company-card";
import CompanyTable from "../components/company-table";
import Pagination from "../components/pagination";
import {
  useCompanies,
  useInfiniteCompanies,
  useIndustries,
  useLocations,
} from "../hooks/useCompanies";
import type {
  ViewMode,
  SortOption,
  FilterParams,
  SortParams,
} from "../types/company";

export function CompanyDirectory() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);
  const itemsPerPage = 15;

  const filters: FilterParams = {
    search: searchQuery || undefined,
    industry: selectedIndustry !== "All" ? selectedIndustry : undefined,
    location: selectedLocation !== "All" ? selectedLocation : undefined,
  };

  const sort: SortParams = {
    sortBy,
    sortOrder: "asc",
  };

  const {
    data: companiesData,
    isLoading: companiesLoading,
    error: companiesError,
  } = useCompanies(currentPage, itemsPerPage, filters, sort);

  const {
    data: infiniteData,
    isLoading: infiniteLoading,
    error: infiniteError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteCompanies(itemsPerPage, filters, sort);

  const { data: industries = [], isLoading: industriesLoading } =
    useIndustries();
  const { data: locations = [], isLoading: locationsLoading } = useLocations();

  const companies = companiesData?.data || [];
  const pagination = companiesData?.pagination;

  const infiniteCompanies =
    infiniteData?.pages.flatMap((page) => page.data) || [];
  const infinitePagination =
    infiniteData?.pages[infiniteData.pages.length - 1]?.pagination;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedIndustry("All");
    setSelectedLocation("All");
    setSortBy("name");
    setCurrentPage(1);
  };

  const applyMobileFilters = () => {
    setCurrentPage(1);
    setIsMobilePanelOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Companies Directory
          </h1>
          <p className="text-gray-600">
            Browse and search through our comprehensive company database
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
          <div className="w-full md:flex-1">
            <form className="max-w-2xl">
              <label
                htmlFor="company-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="company-search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg
                           bg-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search companies..."
                />
              </div>
            </form>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <FilterPanel
              industries={industries}
              locations={locations}
              selectedIndustry={selectedIndustry}
              selectedLocation={selectedLocation}
              onIndustryChange={(v) => {
                setSelectedIndustry(v);
                setCurrentPage(1);
              }}
              onLocationChange={(v) => {
                setSelectedLocation(v);
                setCurrentPage(1);
              }}
            />

            <SortingDropdown
              sortBy={sortBy}
              onSortChange={(s) => {
                setSortBy(s);
                setCurrentPage(1);
              }}
            />

            <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobilePanelOpen(true)}
              className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm hover:shadow focus:outline-none"
              aria-expanded={isMobilePanelOpen}
              aria-controls="mobile-filters"
            >
              <svg
                className="w-4 h-4 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01.293.707v1.586a3 3 0 01-.879 2.121L12 15.122V18a1 1 0 01-1.447.894L7 16.5V15.122L2.586 8.414A3 3 0 012 6.293V5a1 1 0 011-1z" />
              </svg>
              <span>Filters</span>
            </button>

            <div className="inline-flex items-center">
              <SortingDropdown
                sortBy={sortBy}
                onSortChange={(s) => {
                  setSortBy(s);
                  setCurrentPage(1);
                }}
              />
            </div>

            <div>
              <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
            </div>
          </div>
        </div>

        {isMobilePanelOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsMobilePanelOpen(false)}
              aria-hidden="true"
            />

            <aside
              id="mobile-filters"
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-xl p-4 overflow-auto"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Filters & Sort
                </h2>
                <button
                  onClick={() => setIsMobilePanelOpen(false)}
                  aria-label="Close filters"
                  className="p-2 rounded-md hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <FilterPanel
                    industries={industries}
                    locations={locations}
                    selectedIndustry={selectedIndustry}
                    selectedLocation={selectedLocation}
                    onIndustryChange={(v) => setSelectedIndustry(v)}
                    onLocationChange={(v) => setSelectedLocation(v)}
                  />
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Sort by
                  </div>
                  <SortingDropdown
                    sortBy={sortBy}
                    onSortChange={(s) => setSortBy(s)}
                  />
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    View
                  </div>
                  <ViewToggle
                    currentView={viewMode}
                    onViewChange={(v) => setViewMode(v)}
                  />
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => {
                    applyMobileFilters();
                  }}
                  className="flex-1 inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Apply
                </button>

                <button
                  onClick={() => {
                    resetFilters();
                  }}
                  className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md"
                >
                  Reset
                </button>
              </div>
            </aside>
          </>
        )}

        {(viewMode === "list" ? infiniteLoading : companiesLoading) ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="text-gray-500 mt-4">Loading companies...</p>
          </div>
        ) : (viewMode === "list" ? infiniteError : companiesError) ? (
          <div className="text-center py-12">
            <p className="text-red-500 text-lg">Error loading companies</p>
            <p className="text-gray-400 text-sm mt-2">
              Please try again later.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Showing{" "}
                {viewMode === "list"
                  ? infinitePagination?.totalItems || 0
                  : pagination?.totalItems || 0}{" "}
                {((viewMode === "list"
                  ? infinitePagination?.totalItems
                  : pagination?.totalItems) || 0) === 1
                  ? "company"
                  : "companies"}
              </p>
            </div>

            {viewMode === "list" ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {infiniteCompanies.map((company) => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
                </div>
                {hasNextPage && (
                  <div className="flex justify-center">
                    <button
                      onClick={() => fetchNextPage()}
                      disabled={isFetchingNextPage}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
                    >
                      {isFetchingNextPage ? "Loading..." : "Load More"}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <CompanyTable companies={companies} />
                {pagination && pagination.totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={pagination.totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            )}

            {(viewMode === "list" ? infiniteCompanies : companies).length ===
              0 &&
              !(viewMode === "list" ? infiniteLoading : companiesLoading) && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No companies found matching your criteria.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Try adjusting your filters or search query.
                  </p>
                </div>
              )}
          </>
        )}
      </div>
    </div>
  );
}
