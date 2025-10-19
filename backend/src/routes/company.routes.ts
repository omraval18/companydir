import { Hono } from "hono";
import {
  getAllCompanies,
  getCompanyById,
  getIndustries,
  getLocations,
} from "../controllers/company.controller";

const companyRoutes = new Hono();

companyRoutes.get("/", getAllCompanies);

companyRoutes.get("/industries", getIndustries);

companyRoutes.get("/locations", getLocations);

companyRoutes.get("/:id", getCompanyById);

export default companyRoutes;
