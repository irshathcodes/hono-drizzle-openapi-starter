# Hono OpenAPI Starter Kit

A minimal, type-safe REST API starter kit built with Hono, OpenAPI, Drizzle ORM, PostgreSQL for database. This starter demonstrates how to build fully type-safe APIs with automatic OpenAPI spec generation and beautiful documentation.

## Prerequisites

- Node.js >= 22
- pnpm
- Docker and Docker Compose
- Git

## Features

- 🔒 **Full Type Safety**: End-to-end type safety from database to API endpoints using TypeScript
- 📚 **OpenAPI Integration**: Automatic OpenAPI specification generation with Hono OpenAPI
- 🎯 **Simple Example**: Includes a todo app API showcasing best practices
- 🔍 **API Documentation**: Built-in Scalar documentation
- 🛠 **Modern Stack**:
  - [Hono](https://hono.dev/) - Ultrafast web framework
  - [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
  - [@hono/zod-openapi](https://github.com/honojs/middleware/tree/main/packages/zod-openapi) - OpenAPI integration
  - [Zod](https://zod.dev/) - TypeScript-first schema validation

## Quick Start

```bash
# Clone the repository
git clone https://github.com/irshathcodes/hono-drizzle-openapi-starter

# Navigate to project directory
cd hono-drizzle-starter

# Install dependencies
pnpm install

# Set up your environment variables
cp .env.example .env

# Start the development database
pnpm dev:db:start

# Run migrations (Run it in a new terminal)
pnpm dev:db:migrate

# Run the development server
pnpm dev

# Optional: Seed the database with sample data
pnpm dev:db:seed
```

## API Documentation

Once the server is running, you can access:

- OpenAPI documentation at: `http://localhost:3000/doc`
- Scalar API Reference at: `http://localhost:3000/reference`

## Project Structure

```
src/
├── api/                  # API routes and handlers
│   └── todos/           # Todo API implementation
├── db/                  # Database configuration and schemas
│   └── schema/         # Drizzle schema definitions
├── lib/                 # Shared utilities and helpers
└── use-cases/          # Business logic layer
```

## Key Benefits

1. **Type Safety**: Automatic type inference from your database schema to API endpoints
2. **Documentation**: OpenAPI spec is generated automatically from your route definitions
3. **Validation**: Request/response validation using Zod schemas
4. **Developer Experience**: Great DX with TypeScript autocompletion and inline documentation

## Todos

- [ ] Authentication using [Better Auth](https://better-auth.com)
- [ ] S3 integration for file uploads
- [ ] Stripe integration for payment processing
- [ ] Generic RBAC (Role-Based Access Control) permissions system
- [ ] Email integration for sending emails using [Resend](https://resend.com)
- [ ] Linting and formatting
- [ ] Testing

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

This starter kit is inspired by [CJ's hono-open-api-starter](https://github.com/w3cj/hono-open-api-starter) with modifications

## License

MIT
