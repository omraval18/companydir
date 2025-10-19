import React from "react";
import type { Company } from "../types/company";
import { Buildings, MapPin, Users, CalendarBlank } from "@phosphor-icons/react";

type CompanyCardProps = {
  company: Company;
};

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <article className="rounded-md border border-gray-200 bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
      <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Buildings className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
              {company.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 truncate">
              {company.industry}
            </p>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true" />
      </header>

      <p className="text-sm sm:text-sm text-gray-600 mb-4 line-clamp-3 sm:line-clamp-2 min-w-0">
        {company.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2 min-w-0">
          <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-sm text-gray-600 truncate">
            {company.location}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-sm text-gray-600">
            {company.employees.toLocaleString()} employees
          </span>
        </div>

        <div className="flex items-center gap-2">
          <CalendarBlank className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-sm text-gray-600">
            Founded {company.founded}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-900 truncate">
            Revenue: {company.revenue}
          </span>
        </div>
      </div>
    </article>
  );
};

export default CompanyCard;
