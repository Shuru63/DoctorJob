# DoctorJob Portal
A job portal built using the MERN stack (MongoDB, Express.js, React.js, Node.js) tailored for medical professionals such as doctors, nurses, compounders, and medical students. The platform allows users to find and offer job opportunities in the healthcare industry.

### Features
### User Features:
Registration & Login: Users can sign up, log in, and securely authenticate using JWT tokens.
Profile Management: Users can update their personal and professional profiles.
Job Search: Medical professionals can search for job opportunities based on location, specialization, etc.
Job Application: Users can apply for jobs posted by various healthcare organizations.
Job Posting (For Employers): Employers can create and manage job listings.
Admin Dashboard: Admin can manage users, jobs, and applications.
### Admin Features:
User Management: Admin can view and manage users' profiles.
Job Management: Admin can manage posted jobs, including approval/rejection.
Application Tracking: Admin can track applications submitted by users to jobs.
### Tech Stack
Frontend: React.js, Redux, Bootstrap
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
State Management: Redux
Deployment: Heroku (or your preferred platform)
Installation
1. Clone the repository

git clone https://github.com/Shuru63/DoctorJob.git
cd DoctorJob
2. Install Backend Dependencies
Go to the backend directory and install the necessary dependencies:

cd backend
npm install
3. Setup Environment Variables
Create a .env file in the backend folder and set the following environment variables:

makefile
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
4. Install Frontend Dependencies
Go to the frontend directory and install the necessary dependencies:

cd ../frontend
npm install
5. Run the Application
Backend
To start the backend server, run:

cd backend
npm run dev
Frontend
To start the frontend development server, run:

cd frontend
npm run dev
API Documentation

DoctorJob/
│
├── backend/               # Backend server (Node.js + Express.js)
│   ├── controllers/       # Controllers for handling requests
│   ├── models/            # Mongoose models for DB
│   ├── routes/            # API routes
│   ├── middlewares/       # Authentication & Authorization
│   ├── .env               # Environment variables
│   ├── server.js          # Server entry point
│   └── package.json       # Backend dependencies
│
├── frontend/              # Frontend (React.js)
│   ├── src/               # Source code for frontend
│   ├── components/        # React components
│   ├── redux/             # Redux slices for state management
│   ├── public/            # Public files (e.g., index.html)
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
│
└── README.md              # Project documentation

Acknowledgements
React.js for building the frontend.
Node.js and Express.js for the backend.
MongoDB for the database.
