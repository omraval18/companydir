import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { apiService } from '../services/api';
import type { FilterParams, SortParams } from '../types/company';

export const useCompanies = (
  page: number = 1,
  limit: number = 15,
  filters?: FilterParams,
  sort?: SortParams
) => {
  return useQuery({
    queryKey: ['companies', page, limit, filters, sort],
    queryFn: () => apiService.getCompanies(page, limit, filters, sort),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

export const useInfiniteCompanies = (
  limit: number = 15,
  filters?: FilterParams,
  sort?: SortParams
) => {
  return useInfiniteQuery({
    queryKey: ['companies-infinite', limit, filters, sort],
    queryFn: ({ pageParam = 1 }) => apiService.getCompanies(pageParam, limit, filters, sort),
    getNextPageParam: (lastPage) => {
      if (lastPage.pagination.hasNextPage) {
        return lastPage.pagination.currentPage + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};

export const useCompany = (id: number) => {
  return useQuery({
    queryKey: ['company', id],
    queryFn: () => apiService.getCompanyById(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useIndustries = () => {
  return useQuery({
    queryKey: ['industries'],
    queryFn: () => apiService.getIndustries(),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
};

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: () => apiService.getLocations(),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
};
