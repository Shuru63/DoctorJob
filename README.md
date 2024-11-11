# DoctorJob Portal
A job portal built using the MERN stack (MongoDB, Express.js, React.js, Node.js) tailored for medical professionals such as doctors, nurses, compounders, and medical students. The platform allows users to find and offer job opportunities in the healthcare industry.  <br> <br>

### Features
### User Features: 
Registration & Login: Users can sign up, log in, and securely authenticate using JWT tokens.  <br> <br>
Profile Management: Users can update their personal and professional profiles.  <br> <br>
Job Search: Medical professionals can search for job opportunities based on location, specialization, etc.  <br> <br>
Job Application: Users can apply for jobs posted by various healthcare organizations.  <br> <br>
Job Posting (For Employers): Employers can create and manage job listings.  <br> <br>
Admin Dashboard: Admin can manage users, jobs, and applications.  <br> <br>
### Admin Features:  <br> <br>
User Management: Admin can view and manage users' profiles.  <br> <br>
Job Management: Admin can manage posted jobs, including approval/rejection.  <br> <br>
Application Tracking: Admin can track applications submitted by users to jobs.  <br> <br>
### Tech Stack  <br> <br>
Frontend: React.js, Redux, Bootstrap  <br> <br>
Backend: Node.js, Express.js  <br> <br>
Database: MongoDB  <br> <br>
Authentication: JWT (JSON Web Tokens)  <br> <br>
State Management: Redux  <br> <br>
Deployment: Heroku (or your preferred platform)  <br> <br>
Installation  <br> <br>
1. Clone the repository  <br> <br>

**git clone https://github.com/Shuru63/DoctorJob.git**  <br> <br>
cd DoctorJob  <br> <br>
2. Install Backend Dependencies   <br> <br>
**Go to the backend directory and install the necessary dependencies:**

cd backend  <br> <br>
npm install  <br> <br>

**3. Setup Environment Variables **
Create a .env file in the backend folder and set the following environment variables:  <br> <br>

**makefile**
MONGODB_URI=your_mongodb_connection_string  <br> <br>
JWT_SECRET=your_jwt_secret  <br> <br>
PORT=5000  <br> <br>

### 4. Install Frontend Dependencies  <br> <br>
Go to the frontend directory and install the necessary dependencies:

cd ../frontend
npm install
5. Run the Application
**Backend **
To start the backend server, run:  <br> <br>

cd backend  <br> <br>
npm run dev  <br> <br>
**Frontend **
**To start the frontend development server, run: **

cd frontend  <br> <br>
npm run dev  <br> <br>
API Documentation  <br> <br>

DoctorJob/  <br> <br>
│  <br> <br>
### ├── backend/               # Backend server (Node.js + Express.js)  <br> <br>
│   ├── controllers/       # Controllers for handling requests  <br> <br>
│   ├── models/            # Mongoose models for DB  <br> <br>
│   ├── routes/            # API routes  <br> <br>
│   ├── middlewares/       # Authentication & Authorization  <br> <br>
│   ├── .env               # Environment variables  <br> <br>
│   ├── server.js          # Server entry point  <br> <br>
│   └── package.json       # Backend dependencies  <br> <br>
│  <br> <br>
### ├── frontend/              # Frontend (React.js)  <br> <br>
│   ├── src/               # Source code for frontend  <br> <br>
│   ├── components/        # React components  <br> <br>
│   ├── redux/             # Redux slices for state management  <br> <br>
│   ├── public/            # Public files (e.g., index.html)  <br> <br>
│   ├── package.json       # Frontend dependencies  <br> <br>
│   └── vite.config.js     # Vite configuration  <br> <br>


### Acknowledgements
React.js for building the frontend.  <br> <br>
Node.js and Express.js for the backend.  <br> <br>
MongoDB for the database.
