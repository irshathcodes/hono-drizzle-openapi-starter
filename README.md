# Hono Drizzle Starter Kit 🚀

A modern, type-safe backend starter kit built with Hono.js and Drizzle ORM. This template provides a robust foundation for building scalable Node.js applications with PostgreSQL.

## 🌟 Features Included

- **Ultra-fast Web Framework** - Built with [Hono.js](https://hono.dev/), optimized for edge computing
- **Type-safe Database Operations** - Powered by [Drizzle ORM](https://orm.drizzle.team/) for maximum type safety
- **Robust Database System** - Using [PostgreSQL](https://www.postgresql.org/) for reliable data storage
- **OpenAPI Documentation** - Implemented with [Zod Open](https://www.postgresql.org/) for API specifications
- **Schema Validation** - Utilizing [Zod](https://zod.dev/) for TypeScript-first data validation
- **Beautiful API Documentation** - Generated with [Scalar](https://scalar.com/) for comprehensive API references
- **High-Performance Logging** - Implemented using [Pino](https://getpino.io/), a super fast JSON logger
- **Local Development Environment** - Containerized with [Docker](https://www.docker.com/) for consistent development
- **File Storage** - Cloud storage capabilities through AWS S3 integration
- **User Authentication** - Secure authentication system implemented with better-auth
- **Email Services** - Reliable email delivery integrated through Resend

## 📋 Prerequisites

- Node.js 22.x or higher
- pnpm
- Docker and Docker Compose (for local development)

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd hono-drizzle-starter
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Copy the `.env.example` file to `.env` and fill in your configuration:

   ```bash
   cp .env.example .env
   ```

4. **Start the development database**

   ```bash
   pnpm dev:db:start
   ```

5. **Run database migrations**

   ```bash
   pnpm db:migrate
   ```

6. **Start the development server**
   ```bash
   pnpm dev
   ```

The server will be running at `http://localhost:3000`

## 📚 API Documentation

- OpenAPI/Swagger UI: `http://localhost:3000/doc`
- Scalar API Reference: `http://localhost:3000/reference`

## 🛠️ Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm dev:db:start` - Start development database
- `pnpm dev:db:delete` - Remove development database
- `pnpm dev:db:seed` - Seed the database with sample data
- `pnpm dev:db:reset` - Reset the database
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Drizzle Studio
- `pnpm db:push` - Push schema changes to database
- `pnpm db:generate` - Generate migration files

## 📁 Project Structure

```
src/
├── api/           # API routes and handlers
├── db/            # Database configuration and migrations
├── lib/           # Shared utilities and helpers
├── middlewares/   # Custom middleware functions
├── use-cases/     # Business logic and use cases
├── app.ts         # Application setup
└── index.ts       # Entry point
```

## 🔒 Environment Variables

Required environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- `AWS_ACCESS_KEY_ID` - AWS access key for S3
- `AWS_SECRET_ACCESS_KEY` - AWS secret key for S3
- `AWS_REGION` - AWS region
- `AWS_BUCKET_NAME` - S3 bucket name
- `RESEND_API_KEY` - Resend API key for email service

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [w3cj](https://github.com/w3cj/hono-open-api-starter) for the inspiration
