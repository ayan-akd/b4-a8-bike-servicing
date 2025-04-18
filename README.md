# Bike Servicing Management API

A robust backend API built using **Node.js**, **Express.js**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**. This API enables a bike servicing center to efficiently manage customers, bikes, and service records. It supports comprehensive CRUD operations for all entities and includes specialized endpoints for assigning and completing servicing jobs.

## 📋 Features

- **Customer Management**: Create, read, update, and delete customer details securely.
- **Bike Management**: Fully manage bike records with proper customer association.
- **Service Record Management**: Track service jobs from creation to completion.
- **Relationship Management**: Maintain proper relations between customers, bikes, and services.
- **Service Status Tracking**: Monitor pending, in-progress, and completed services.
- **Overdue Services Detection**: Identify services that are pending for more than 7 days.
- **TypeScript Integration**: Type annotations for reliability and maintainability.
- **Prisma ORM**: Modern database toolkit for PostgreSQL interaction with type safety.
- **Error Handling**: Robust error handling with standardized response structures.
- **UUID Implementation**: Secure unique identifiers for all database entities.

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (>=14.x.x)
- **Bun** (latest version)
- **PostgreSQL**
- **Git**
- **TypeScript** (Optional: If you prefer to install globally)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ayan-akd/b4-a8-bike-servicing.git
   ```

2. Install dependencies:
   ```bash
   cd b4-a8-bike-servicing
   bun install
   ```

3. Create a .env file in the root directory with your PostgreSQL connection details:
   ```bash
   DATABASE_URL="postgresql://username:password@localhost:5432/bike_servicing_db"
   PORT=5000
   NODE_ENV=development
   ```

4. Run Prisma migrations to set up your database schema:
   ```bash
   bun migrate
   ```

5. Start the development server:
   ```bash
   bun dev
   ```

The server will run at http://localhost:5000 (or another port if you configure it differently).

## 🛠️ Scripts

The project includes several npm scripts for development and production:

- `bun postinstall`:  Automatically generates Prisma client after installation.
- `bun migrate`: Runs Prisma migrations to update the database schema.
- `bun build`: Builds the production application using TypeScript compiler.
- `bun dev`: Starts the application in development mode with live reloading using tsx.
- `bun prod`: Runs the application in production mode..
- `bun lint`: Lints the codebase using **ESLint**.
- `bun lint:fix`: Automatically fixes linting errors.

## API Endpoints

### Customer Management

- **POST /api/customers** - Create a new customer
- **GET /api/customers** - Get all customers
- **GET /api/customers/:id** - Get a specific customer by ID
- **PUT /api/customers/:id** - Update customer details
- **DELETE /api/customers/:id** - Delete a customer

### Bike Management

- **POST /api/bikes** - Add a new bike
- **GET /api/bikes** - Get all bikes
- **GET /api/bikes/:id** - Get a specific bike by ID
- **PUT /api/bikes/:id** - Update bike details
- **DELETE /api/bikes/:id** - Delete a bike

### Service Management

- **POST /api/services** - Create a service record
- **GET /api/services** - Get all service records
- **GET /api/services/:id** - Get a specific service record
- **PUT /api/services/:id/complete** - Mark a service as completed
- **GET /api/services/status** - Get pending or overdue services (older than 7 days)

## Database Schema

The API uses Prisma ORM with PostgreSQL and implements the following schema:

### Customer
| Field | Type | Description |
|-------|------|-------------|
| `customerId` | UUID | Unique identifier for the customer |
| `name` | String | Full name of the customer |
| `email` | String | Unique email |
| `phone` | String | Contact number |
| `createdAt` | DateTime | Auto timestamp when created |

### Bike
| Field | Type | Description |
|-------|------|-------------|
| `bikeId` | UUID | Unique identifier for each bike |
| `brand` | String | Brand of the bike (e.g., Honda, Yamaha) |
| `model` | String | Model name |
| `year` | Int | Manufacturing year |
| `customerId` | UUID | Foreign key referencing Customer |

### ServiceRecord
| Field | Type | Description |
|-------|------|-------------|
| `serviceId` | UUID | Unique identifier for the service record |
| `bikeId` | UUID | FK to Bike |
| `serviceDate` | DateTime | Date the service started |
| `completionDate` | DateTime | Nullable. Date the service completed |
| `description` | String | Details of service (e.g., oil change) |
| `status` | String | Status: "pending", "in-progress", "done" |

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for Node.js for building the API.
- **TypeScript**: Type-safe JavaScript for a more reliable and maintainable codebase.
- **Prisma ORM**: Next-generation ORM for Node.js and TypeScript.
- **PostgreSQL**: Powerful open-source relational database system.
- **Bun**: JavaScript runtime & toolkit designed as a drop-in replacement for Node.js.
- **tsx**: TypeScript execution and module system, used for running TypeScript files with live reloading.
- **ESLint**: Linting tool to enforce consistent coding styles.
- **Prettier**: Code formatter to maintain consistent formatting across the codebase.
- **http-status**: Utility for HTTP status codes.

## Error Handling

The API implements standardized error responses with the following structure:

```json
{
  "success": false,
  "status": 404,
  "message": "Customer not found",
  "stack": "Optional stack trace shown only in development"
}
```

## Project Live Link

[Live API](https://b4-a8.vercel.app/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the **PostgreSQL** team for providing a reliable database solution.
- Special thanks to **Prisma**, **ESLint**, and **Prettier** for enhancing code quality and maintainability.

Feel free to clone and contribute to this project. If you find any bugs or have suggestions for improvements, feel free to open an issue or pull request!

Happy coding! 🏍️🔧
