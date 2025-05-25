# NestJS Server Application

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## Overview

A robust NestJS-based server application that implements a comprehensive authentication system with role-based access control. Built with TypeScript, this application features:

- User authentication (registration, login)
- Role-based authorization (admin/user roles)
- REST API endpoints
- Automated API testing infrastructure (Playwright + TypeScript)
- Docker containerization
- PostgreSQL database integration

## Project Structure

```
├── api/                 # API testing infrastructure
│   ├── fixtures/        # Test fixtures and setup
│   ├── infra/          # Infrastructure code
│   ├── tests/          # API tests
│   └── utils/          # Utilities and helpers
├── src/                 # Application source code
│   ├── auth/           # Authentication module
│   ├── users/          # Users module
│   └── middleware/     # Custom middleware
└── docker/             # Docker configuration
```

## Features

### Authentication
- User registration with role assignment
- JWT-based authentication
- Protected routes with Guards
- Role-based access control (RBAC)

### Testing Infrastructure
- Playwright for API testing
- Custom fixtures for test setup
- Automated test runs with CI/CD
- Comprehensive API test coverage

### Database
- PostgreSQL integration
- In-memory database for development
- Docker container setup

## Getting Started

### Prerequisites
- Node.js (v20 or later)
- Docker and Docker Compose
- npm/yarn package manager

### Installation

```bash
# Install dependencies
$ npm ci

# Install Playwright for testing
$ npx playwright install
```

### Development

```bash
# Start development server
$ npm run start:dev

# Run API tests
$ npm run test:api

# Generate API documentation
$ npm run docs
```

## Deployment

This project uses Docker for containerization and deployment:

```bash
# Build and start Docker containers
$ docker-compose up -d

# Stop containers
$ docker-compose down
```

The application includes:
- NestJS server container
- PostgreSQL database container
- pgAdmin container for database management

### Environment Variables

Required environment variables:
- `JWT_SECRET`: Secret key for JWT tokens
- `PORT`: Application port (default: 3000)
- `POSTGRES_PASSWORD`: Database password
- `PGADMIN_DEFAULT_EMAIL`: pgAdmin email
- `PGADMIN_DEFAULT_PASSWORD`: pgAdmin password

## API Documentation

Once the application is running, visit `http://localhost:3000/api` for Swagger documentation.

### Main Endpoints

- Authentication:
  - POST `/auth/register` - Register new user
  - POST `/auth/login` - Login user
  - GET `/auth/profile` - Get user profile (protected)

- Users:
  - GET `/users` - List users (protected)
  - GET `/users/:id` - Get user by ID (protected)
  - PATCH `/users/:id` - Update user (protected)
  - DELETE `/users/:id` - Delete user (protected)

## Testing

The project includes a comprehensive testing suite:

```bash
# Run API tests
$ npm run test:api

# Run unit tests
$ npm run test

# Run e2e tests
$ npm run test:e2e
```

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

This project is MIT licensed.
