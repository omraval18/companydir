import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import routes from "./routes";

const app = new Hono();

app.use("*", logger());

app.use(
  "*",
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/", (c) => {
  return c.json({
    success: true,
    message: "Companies Directory API",
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
      companies: "/api/companies",
      companyById: "/api/companies/:id",
      tags: "/api/companies/tags",
      types: "/api/companies/types",
    },
  });
});

app.route("/api", routes);

app.notFound((c) => {
  return c.json(
    {
      success: false,
      message: "Route not found",
    },
    404
  );
});

app.onError((err, c) => {
  console.error("Server error:", err);
  return c.json(
    {
      success: false,
      message: "Internal server error",
      error: err.message,
    },
    500
  );
});

export default app;
