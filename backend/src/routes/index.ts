import { Hono } from "hono";
import companyRoutes from "./company.routes";

const routes = new Hono();

routes.route("/companies", companyRoutes);

routes.get("/health", (c) => {
  return c.json({
    success: true,
    message: "API is running",
    timestamp: new Date().toISOString(),
  });
});

export default routes;
