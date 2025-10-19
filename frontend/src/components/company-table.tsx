import React from "react";
import type { Company } from "../types/company";

type CompanyTableProps = {
  companies: Company[];
};

const CompanyTable: React.FC<CompanyTableProps> = ({ companies }) => {

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse bg-white border border-gray-200 rounded-md">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
              Company Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
              Industry
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
              Location
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
              Employees
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
              Founded
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-900 border-b border-gray-200">
              Revenue
            </th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr
              key={company.id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 transition-colors`}
            >
              <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                <div>
                  <div className="font-medium">{company.name}</div>
                  <div className="text-gray-500 text-xs mt-1">{company.description}</div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-200">
                {company.industry}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-200">
                {company.location}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-200">
                {company.employees.toLocaleString()}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-200">
                {company.founded}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-200">
                {company.revenue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
