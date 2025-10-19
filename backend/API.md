# Companies Directory API Documentation

## Base URL
```
http://localhost:3000
```

## API Endpoints

### 1. Get All Companies (with pagination, filtering, and sorting)

**Endpoint:** `GET /api/companies`

**Query Parameters:**
- `page` (optional, default: 1) - Page number
- `limit` (optional, default: 10, max: 100) - Items per page
- `search` (optional) - Search by company name, tags, or headquarter
- `tags` (optional) - Filter by company tags (e.g., "IT Services & Consulting")
- `companyType` (optional) - Filter by company type ("Public" or "Private")
- `minRating` (optional) - Filter by minimum rating
- `sortBy` (optional) - Sort field: "name", "rating", "employees", "age"
- `sortOrder` (optional) - Sort order: "asc" or "desc"

**Example Requests:**
```bash
# Get first page with 10 companies
GET /api/companies

# Get second page with 20 companies
GET /api/companies?page=2&limit=20

# Search for companies
GET /api/companies?search=TCS

# Filter by tags
GET /api/companies?tags=IT Services

# Filter by company type
GET /api/companies?companyType=Public

# Filter by minimum rating
GET /api/companies?minRating=4.0

# Sort by rating (descending)
GET /api/companies?sortBy=rating&sortOrder=desc

# Combined filters
GET /api/companies?page=1&limit=15&tags=IT&minRating=4&sortBy=rating&sortOrder=desc
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 0,
      "name": "TCS",
      "rating": 3.9,
      "reviews": "(47k Reviews)",
      "companyType": "Public",
      "headquarter": "Mumbai,Maharashtra + 267 more",
      "age": "54 years old",
      "employees": "1 Lakh+ Employees (India)",
      "tags": "BPO / Call Centre"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 9,
    "totalItems": 90,
    "itemsPerPage": 10,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
```

### 2. Get Company by ID

**Endpoint:** `GET /api/companies/:id`

**Example Request:**
```bash
GET /api/companies/0
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 0,
    "name": "TCS",
    "rating": 3.9,
    "reviews": "(47k Reviews)",
    "companyType": "Public",
    "headquarter": "Mumbai,Maharashtra + 267 more",
    "age": "54 years old",
    "employees": "1 Lakh+ Employees (India)",
    "tags": "BPO / Call Centre"
  }
}
```

### 3. Get All Company Tags

**Endpoint:** `GET /api/companies/tags`

**Example Request:**
```bash
GET /api/companies/tags
```

**Response:**
```json
{
  "success": true,
  "data": [
    "BPO / Call Centre",
    "IT Services & Consulting",
    "Financial Services",
    "Internet",
    "Manufacturing"
  ]
}
```

### 4. Get All Company Types

**Endpoint:** `GET /api/companies/types`

**Example Request:**
```bash
GET /api/companies/types
```

**Response:**
```json
{
  "success": true,
  "data": [
    "Private",
    "Public"
  ]
}
```

### 5. Health Check

**Endpoint:** `GET /api/health`

**Example Request:**
```bash
GET /api/health
```

**Response:**
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2025-01-19T10:30:00.000Z"
}
```

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Invalid company ID"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Company not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Failed to fetch companies",
  "error": "Error details"
}
```

## Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   └── company.controller.ts    # Request handlers
│   ├── services/
│   │   └── company.service.ts       # Business logic & data operations
│   ├── routes/
│   │   ├── index.ts                 # Main router
│   │   └── company.routes.ts        # Company routes
│   ├── types/
│   │   └── company.types.ts         # TypeScript types
│   ├── utils/
│   │   └── pagination.util.ts       # Pagination utilities
│   └── index.ts                     # App entry point
├── data.json                        # Company data
└── package.json
```

## Running the Server

```bash
# Install dependencies
bun install

# Development mode
bun run dev

# Production mode
bun run start
```

The server will start on `http://localhost:3000`
