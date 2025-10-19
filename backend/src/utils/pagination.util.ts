import type { PaginationParams, PaginatedResponse } from "../types/company.types";

export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 10;
export const MAX_LIMIT = 100;

export const validatePaginationParams = (
  page?: string | number,
  limit?: string | number
): PaginationParams => {
  const parsedPage = typeof page === "string" ? parseInt(page, 10) : page || DEFAULT_PAGE;
  const parsedLimit = typeof limit === "string" ? parseInt(limit, 10) : limit || DEFAULT_LIMIT;

  const validatedPage = isNaN(parsedPage) || parsedPage < 1 ? DEFAULT_PAGE : parsedPage;
  const validatedLimit =
    isNaN(parsedLimit) || parsedLimit < 1
      ? DEFAULT_LIMIT
      : Math.min(parsedLimit, MAX_LIMIT);

  return {
    page: validatedPage,
    limit: validatedLimit,
  };
};

export const paginateData = <T>(
  data: T[],
  params: PaginationParams
): PaginatedResponse<T> => {
  const { page, limit } = params;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems,
      itemsPerPage: limit,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
};
