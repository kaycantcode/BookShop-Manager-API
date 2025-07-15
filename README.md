# Book Management API System

A complete full-stack web application implementing a book management system with RESTful API endpoints. Built for the IBM Coursera final project requirements with modern React frontend and Express.js backend.

## Features

### Core API Endpoints (13 Tasks)
- **Task 1-4**: Book operations (get all books, by ISBN, by author, by title)
- **Task 5**: Get book reviews by ISBN
- **Task 6-7**: User registration and authentication
- **Task 8-9**: Add/modify and delete book reviews (authenticated)
- **Task 10-13**: Client-side API consumption with async/await

### Frontend Features
- Modern React dashboard with tabbed navigation
- Book management with search and filtering
- User registration and management
- Review system with rating and commenting
- Interactive API testing interface
- Responsive design with Tailwind CSS

### Backend Features
- RESTful API with Express.js
- PostgreSQL database integration
- Session-based authentication
- Input validation with Zod schemas
- Comprehensive error handling

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **TanStack Query** for state management
- **Wouter** for routing

### Backend
- **Node.js** with Express.js
- **TypeScript** with ESM modules
- **PostgreSQL** with Neon database
- **Drizzle ORM** for database operations
- **Zod** for validation

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Books Table
```sql
CREATE TABLE books (
  isbn VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL
);
```

### Reviews Table
```sql
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  isbn VARCHAR(255) REFERENCES books(isbn),
  username VARCHAR(255) NOT NULL,
  rating DECIMAL(2,1) NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

### Books
- `GET /api/books` - Get all books
- `GET /api/books/isbn/:isbn` - Get book by ISBN
- `GET /api/books/author/:author` - Get books by author
- `GET /api/books/title/:title` - Get books by title
- `POST /api/books` - Add new book (admin)

### Reviews
- `GET /api/books/review/:isbn` - Get reviews for a book
- `POST /api/books/review/:isbn` - Add/update review (authenticated)
- `DELETE /api/books/review/:isbn` - Delete review (authenticated)

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users` - Get all users (admin)

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (or use Neon for cloud database)
- Environment variables configured

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd book-management-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env file
DATABASE_URL=your_postgresql_connection_string
SESSION_SECRET=your_session_secret
NODE_ENV=development
```

4. Set up database:
```bash
# Push schema to database
npm run db:push

# Seed with initial data
npm run db:seed
```

5. Start the application:
```bash
# Development mode (starts both frontend and backend)
npm run dev

# Production build
npm run build
npm start
```

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Push database schema
- `npm run db:seed` - Seed database with initial data
- `npm run db:studio` - Open Drizzle Studio

### Project Structure
```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components
│   │   └── lib/            # Utilities
├── server/                 # Express backend
│   ├── index.ts           # Main server file
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database layer
│   └── db.ts              # Database connection
├── shared/                 # Shared types and schemas
└── README.md
```

## Usage

### Testing the API
1. Visit the dashboard at `http://localhost:5000`
2. Navigate to "API Test" tab
3. Test all endpoints with the interactive interface

### Adding Books
1. Go to "Book Management" tab
2. Fill in ISBN, title, and author
3. Click "Add Book" to save

### User Registration
1. Go to "User Management" tab
2. Fill in username and password
3. Click "Register User"

### Managing Reviews
1. Go to "Review Management" tab
2. Select a book and enter your review
3. Only edit/delete your own reviews

## Features Implemented

### User Permissions
- Users can only edit and delete their own reviews
- Review editing shows current user context
- Visual indicators for editable vs. non-editable reviews

### Data Persistence
- PostgreSQL database with proper relationships
- Seeded with initial books and sample data
- Consistent data across application restarts

### Error Handling
- Comprehensive error responses
- Input validation with Zod
- User-friendly error messages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- IBM Coursera Full Stack Development Course
- React and Express.js communities
- shadcn/ui for component library
- Drizzle ORM for database operations