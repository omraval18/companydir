import { mockCompanies, industries, locations } from "../mockData";
import type { Company, FilterParams, SortParams } from "../types/company.types";

class CompanyService {
  private companies: Company[] = mockCompanies;

  getAllCompanies(): Company[] {
    return this.companies;
  }

  getCompanyById(id: number): Company | undefined {
    return this.companies.find((company) => company.id === id);
  }

  filterCompanies(filters: FilterParams): Company[] {
    let filtered = [...this.companies];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (company) =>
          company.name.toLowerCase().includes(searchLower) ||
          company.description.toLowerCase().includes(searchLower) ||
          company.location.toLowerCase().includes(searchLower) ||
          company.industry.toLowerCase().includes(searchLower),
      );
    }

    if (filters.industry) {
      filtered = filtered.filter(
        (company) =>
          company.industry.toLowerCase() === filters.industry!.toLowerCase(),
      );
    }

    if (filters.location) {
      filtered = filtered.filter(
        (company) =>
          company.location.toLowerCase() === filters.location!.toLowerCase(),
      );
    }

    if (filters.minEmployees !== undefined) {
      filtered = filtered.filter(
        (company) => company.employees >= filters.minEmployees!,
      );
    }

    if (filters.maxEmployees !== undefined) {
      filtered = filtered.filter(
        (company) => company.employees <= filters.maxEmployees!,
      );
    }

    if (filters.foundedAfter !== undefined) {
      filtered = filtered.filter(
        (company) => company.founded >= filters.foundedAfter!,
      );
    }

    if (filters.foundedBefore !== undefined) {
      filtered = filtered.filter(
        (company) => company.founded <= filters.foundedBefore!,
      );
    }

    return filtered;
  }

  sortCompanies(companies: Company[], sortParams: SortParams): Company[] {
    const { sortBy = "name", sortOrder = "asc" } = sortParams;
    const sorted = [...companies];

    sorted.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "employees":
          comparison = a.employees - b.employees;
          break;
        case "founded":
          comparison = a.founded - b.founded;
          break;
        case "industry":
          comparison = a.industry.localeCompare(b.industry);
          break;
        default:
          comparison = 0;
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    return sorted;
  }

  getUniqueIndustries(): string[] {
    return industries;
  }

  getUniqueLocations(): string[] {
    return locations;
  }
}

export const companyService = new CompanyService();
