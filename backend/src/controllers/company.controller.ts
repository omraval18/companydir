import type { Context } from "hono";
import { companyService } from "../services/company.service";
import { validatePaginationParams, paginateData } from "../utils/pagination.util";
import type { FilterParams, SortParams } from "../types/company.types";

export const getAllCompanies = (c: Context) => {
  try {
    const page = c.req.query("page");
    const limit = c.req.query("limit");
    const search = c.req.query("search");
    const industry = c.req.query("industry");
    const location = c.req.query("location");
    const minEmployees = c.req.query("minEmployees");
    const maxEmployees = c.req.query("maxEmployees");
    const foundedAfter = c.req.query("foundedAfter");
    const foundedBefore = c.req.query("foundedBefore");
    const sortBy = c.req.query("sortBy") as "name" | "employees" | "founded" | "industry" | undefined;
    const sortOrder = c.req.query("sortOrder") as "asc" | "desc" | undefined;

    const paginationParams = validatePaginationParams(page, limit);

    const filterParams: FilterParams = {
      search,
      industry,
      location,
      minEmployees: minEmployees ? parseInt(minEmployees, 10) : undefined,
      maxEmployees: maxEmployees ? parseInt(maxEmployees, 10) : undefined,
      foundedAfter: foundedAfter ? parseInt(foundedAfter, 10) : undefined,
      foundedBefore: foundedBefore ? parseInt(foundedBefore, 10) : undefined,
    };

    const sortParams: SortParams = {
      sortBy,
      sortOrder,
    };

    let companies = companyService.getAllCompanies();

    companies = companyService.filterCompanies(filterParams);

    companies = companyService.sortCompanies(companies, sortParams);

    const paginatedResponse = paginateData(companies, paginationParams);

    return c.json({
      success: true,
      ...paginatedResponse,
    });
  } catch (error) {
    console.error("Error in getAllCompanies:", error);
    return c.json(
      {
        success: false,
        message: "Failed to fetch companies",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      500
    );
  }
};

export const getCompanyById = (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"), 10);

    if (isNaN(id)) {
      return c.json(
        {
          success: false,
          message: "Invalid company ID",
        },
        400
      );
    }

    const company = companyService.getCompanyById(id);

    if (!company) {
      return c.json(
        {
          success: false,
          message: "Company not found",
        },
        404
      );
    }

    return c.json({
      success: true,
      data: company,
    });
  } catch (error) {
    console.error("Error in getCompanyById:", error);
    return c.json(
      {
        success: false,
        message: "Failed to fetch company",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      500
    );
  }
};

export const getIndustries = (c: Context) => {
  try {
    const industries = companyService.getUniqueIndustries();

    return c.json({
      success: true,
      data: industries,
    });
  } catch (error) {
    console.error("Error in getIndustries:", error);
    return c.json(
      {
        success: false,
        message: "Failed to fetch industries",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      500
    );
  }
};

export const getLocations = (c: Context) => {
  try {
    const locations = companyService.getUniqueLocations();

    return c.json({
      success: true,
      data: locations,
    });
  } catch (error) {
    console.error("Error in getLocations:", error);
    return c.json(
      {
        success: false,
        message: "Failed to fetch locations",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      500
    );
  }
};
