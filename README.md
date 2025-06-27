# LMS Portal Project

## Overview
A comprehensive Learning Management System (LMS) built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform enables educators to create and sell courses while providing students with an intuitive learning experience.

## Features

### Student Features
- **Course Discovery**: Browse and search through available courses
- **Course Preview**: View free preview lectures before purchasing
- **Secure Payment Processing**: Integrated with Stripe for seamless transactions
- **Learning Dashboard**: Track progress through enrolled courses
- **Video Player**: Watch course content with a custom video player
- **Progress Tracking**: Monitor completion status for each course

### Educator Features
- **Course Creation**: Intuitive interface for creating structured courses with chapters and lectures
- **Rich Content Editor**: Quill-based editor for detailed course descriptions
- **Analytics Dashboard**: Track enrollments, earnings, and student engagement
- **Student Management**: View and manage enrolled students
- **Course Management**: Publish, edit, and manage course content

## Tech Stack

### Frontend
- **React.js**: UI library for building the user interface
- **React Router**: For navigation and routing
- **Tailwind CSS**: For styling and responsive design
- **Axios**: For API requests
- **Clerk**: For authentication and user management
- **React Toastify**: For notifications
- **Quill**: Rich text editor for course content
- **YouTube Player**: For video content

### Backend
- **Node.js/Express**: Server framework
- **MongoDB**: Database for storing course and user data
- **Mongoose**: ODM for MongoDB
- **Stripe**: Payment processing
- **Cloudinary**: Cloud storage for images and media
- **Clerk**: Authentication and user management
- **Multer**: File upload handling

## Project Structure

```
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   └── src/                # Source files
│       ├── assets/         # Images and other assets
│       ├── components/     # Reusable components
│       ├── context/        # React context for state management
│       └── pages/          # Page components
│           ├── Educator/   # Educator-specific pages
│           └── student/    # Student-specific pages
└── server/                 # Backend Express application
    ├── configs/            # Configuration files
    ├── controllers/        # Request handlers
    ├── middlewares/        # Express middlewares
    ├── models/             # Mongoose models
    └── routes/             # API routes
```

## Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- Clerk account for authentication
- Stripe account for payments
- Cloudinary account for media storage

### Setup

1. Clone the repository

2. Install dependencies for both client and server:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. Create `.env` files in both client and server directories with the necessary environment variables.

4. Start the development servers:
   ```bash
   # Start server
   cd server
   npm run server

   # Start client
   cd ../client
   npm run dev
   ```

## Deployment

The project is configured for deployment on Vercel:
- Frontend: Client directory with SPA configuration
- Backend: Server directory with Node.js serverless functions

## License

This project is licensed under the ISC License.