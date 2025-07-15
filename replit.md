# Book Management API System

## Overview

This is a full-stack web application implementing a book management system with a RESTful API. The project is designed as a Coursera assignment implementing 13 specific tasks related to book operations, user management, and API interactions. It features a modern React frontend with shadcn/ui components and an Express.js backend with TypeScript support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage for development)
- **Session Management**: Express sessions with PostgreSQL store support
- **Development**: Hot reload with tsx for TypeScript execution

### Data Storage Solutions
- **Primary Database**: PostgreSQL (via Neon Database connection) - ACTIVE
- **ORM**: Drizzle ORM with Zod validation schemas
- **Database Storage**: Full PostgreSQL implementation with persistent data
- **Migration Management**: Drizzle Kit for schema migrations

## Key Components

### Backend Components
1. **Express Server** (`server/index.ts`): Main application entry point with middleware setup
2. **Route Handlers** (`server/routes.ts`): API endpoints for all 13 Coursera tasks
3. **Storage Layer** (`server/storage.ts`): Abstracted storage interface with PostgreSQL implementation
4. **Database Configuration** (`server/db.ts`): PostgreSQL connection and Drizzle setup
5. **Database Schema** (`shared/schema.ts`): Drizzle schema definitions with Zod validation
6. **Database Seeding** (`server/seed.ts`): Initial data population script

### Frontend Components
1. **Dashboard** (`client/src/pages/dashboard.tsx`): Main application interface with tabbed navigation
2. **Book Management** (`client/src/components/book-management.tsx`): CRUD operations for books
3. **User Management** (`client/src/components/user-management.tsx`): User registration and authentication
4. **Review Management** (`client/src/components/review-management.tsx`): Book review system
5. **API Test Interface** (`client/src/components/api-test.tsx`): Interactive API testing dashboard

### API Endpoints (13 Coursera Tasks)
- **Tasks 1-4**: Book retrieval operations (all books, by ISBN, by author, by title)
- **Tasks 5**: Book review retrieval by ISBN
- **Tasks 6-7**: User registration and login
- **Tasks 8-9**: Authenticated review operations (add/modify, delete)
- **Tasks 10-13**: Client-side API consumption with async/await and promises

## Data Flow

### Request Flow
1. Client makes HTTP requests through React Query
2. Requests hit Express middleware for logging and error handling
3. Route handlers process requests and interact with storage layer
4. Storage layer performs operations on PostgreSQL database via Drizzle ORM
5. Responses return through middleware chain with consistent error handling

### Data Models
- **Users**: ID, username, password, timestamps
- **Books**: ISBN (primary key), title, author
- **Reviews**: ID, ISBN reference, username, rating, review text, timestamps

### Authentication Flow
- Session-based authentication with express-session
- User registration with password validation
- Login endpoints with session management
- Protected routes for review operations

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **HTTP Client**: Axios for API requests
- **State Management**: TanStack React Query
- **Date Handling**: date-fns

### Backend Dependencies
- **Web Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM, PostgreSQL driver (@neondatabase/serverless)
- **Session Management**: express-session, connect-pg-simple
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution, Vite for frontend builds

### Development Tools
- **Build System**: Vite with React plugin
- **Database Management**: Drizzle Kit for migrations
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Production backend bundling

## Deployment Strategy

### Development Environment
- Concurrent development with Vite dev server for frontend
- tsx for backend TypeScript execution with hot reload
- PostgreSQL database with persistent data storage
- Integrated error overlay and debugging tools
- Database seeding for consistent development data

### Production Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles TypeScript server to `dist/index.js`
3. **Static Serving**: Express serves frontend build in production
4. **Database**: Ready for PostgreSQL connection via DATABASE_URL environment variable

### Configuration Management
- Environment-based configuration (NODE_ENV)
- Database URL configuration for production PostgreSQL
- Session secret management for production security
- CORS and security middleware for production deployment

### Replit Integration
- Configured for Replit development environment
- Runtime error overlay for development
- Cartographer plugin for enhanced Replit experience
- Hot reload and live development features
- PostgreSQL database provisioned and configured

## Recent Changes (Latest)
- **Database Integration (Today)**: Migrated from in-memory storage to PostgreSQL database
- **Database Schema**: Created users, books, and reviews tables with proper relationships
- **Data Seeding**: Added initial books, test user, and sample reviews
- **Storage Layer**: Updated to use Drizzle ORM for all database operations
- **SelectItem Fix**: Resolved React component errors with proper value props
- **Test Login Removal**: Removed test login functionality from user management
- **Review Editing Permissions**: Implemented proper review editing - users can only edit their own reviews
- **GitHub Preparation**: Added README, .env.example, LICENSE, and proper .gitignore for repository upload