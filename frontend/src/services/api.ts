import type {
  Company,
  PaginatedResponse,
  FilterParams,
  SortParams,
  ApiResponse,
} from "../types/company";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

class ApiError extends Error {
  constructor(message: string, status: number, response?: any) {
    super(message);
    this.name = "ApiError";
    console.log(status, response);
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new ApiError(
      errorData.message || `HTTP error! status: ${response.status}`,
      response.status,
      errorData,
    );
  }

  return response.json();
}

export const apiService = {
  async getCompanies(
    page: number = 1,
    limit: number = 15,
    filters?: FilterParams,
    sort?: SortParams,
  ): Promise<PaginatedResponse<Company>> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (filters?.search) params.append("search", filters.search);
    if (filters?.industry) params.append("industry", filters.industry);
    if (filters?.location) params.append("location", filters.location);
    if (filters?.minEmployees)
      params.append("minEmployees", filters.minEmployees.toString());
    if (filters?.maxEmployees)
      params.append("maxEmployees", filters.maxEmployees.toString());
    if (filters?.foundedAfter)
      params.append("foundedAfter", filters.foundedAfter.toString());
    if (filters?.foundedBefore)
      params.append("foundedBefore", filters.foundedBefore.toString());

    if (sort?.sortBy) params.append("sortBy", sort.sortBy);
    if (sort?.sortOrder) params.append("sortOrder", sort.sortOrder);

    const response = await fetch(`${API_BASE_URL}/companies?${params}`);
    const data = await handleResponse<ApiResponse<Company[]>>(response);

    if (!data.success) {
      throw new ApiError(data.message || "Failed to fetch companies", 500);
    }

    return {
      data: data.data || [],
      pagination: data.pagination || {
        currentPage: page,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: limit,
        hasNextPage: false,
        hasPreviousPage: false,
      },
    };
  },

  async getCompanyById(id: number): Promise<Company> {
    const response = await fetch(`${API_BASE_URL}/companies/${id}`);
    const data = await handleResponse<ApiResponse<Company>>(response);

    if (!data.success || !data.data) {
      throw new ApiError(data.message || "Company not found", 404);
    }

    return data.data;
  },

  async getIndustries(): Promise<string[]> {
    const response = await fetch(`${API_BASE_URL}/companies/industries`);
    const data = await handleResponse<ApiResponse<string[]>>(response);

    if (!data.success || !data.data) {
      throw new ApiError(data.message || "Failed to fetch industries", 500);
    }

    return data.data;
  },

  async getLocations(): Promise<string[]> {
    const response = await fetch(`${API_BASE_URL}/companies/locations`);
    const data = await handleResponse<ApiResponse<string[]>>(response);

    if (!data.success || !data.data) {
      throw new ApiError(data.message || "Failed to fetch locations", 500);
    }

    return data.data;
  },
};

export { ApiError };
