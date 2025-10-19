export type Company = {
  id: number;
  name: string;
  location: string;
  industry: string;
  employees: number;
  founded: number;
  revenue: string;
  description: string;
};

export type PaginationParams = {
  page: number;
  limit: number;
};

export type PaginatedResponse<T> = {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
};

export type FilterParams = {
  search?: string;
  industry?: string;
  location?: string;
  minEmployees?: number;
  maxEmployees?: number;
  foundedAfter?: number;
  foundedBefore?: number;
};

export type SortParams = {
  sortBy?: "name" | "employees" | "founded" | "industry";
  sortOrder?: "asc" | "desc";
};
