# DoctorJob Portal
A job portal built using the MERN stack (MongoDB, Express.js, React.js, Node.js) tailored for medical professionals such as doctors, nurses, compounders, and medical students. The platform allows users to find and offer job opportunities in the healthcare industry.  <br>

### Features
### User Features: 
* Registration & Login: Users can sign up, log in, and securely authenticate using JWT tokens.  <br>
* Profile Management: Users can update their personal and professional profiles.  <br>
* Job Search: Medical professionals can search for job opportunities based on location, specialization, etc.  <br>
* Job Application: Users can apply for jobs posted by various healthcare organizations.  <br>
* Job Posting (For Employers): Employers can create and manage job listings.  <br>
* Admin Dashboard: Admin can manage users, jobs, and applications.  <br>
### Admin Features:  <br>
* User Management: Admin can view and manage users' profiles.  <br>
* Job Management: Admin can manage posted jobs, including approval/rejection.  <br>
* Application Tracking: Admin can track applications submitted by users to jobs.  <br>
### Tech Stack  <br>
* Frontend: React.js, Redux, Bootstrap  <br>
* Backend: Node.js, Express.js  <br>
* Database: MongoDB  <br>
* Authentication: JWT (JSON Web Tokens)  <br>
* State Management: Redux  <br>
* Deployment: Heroku (or your preferred platform)  <br>
Installation  <br>
1. Clone the repository  <br>

**git clone https://github.com/Shuru63/DoctorJob.git**  <br>
cd DoctorJob  <br>
2. Install Backend Dependencies   <br>
**Go to the backend directory and install the necessary dependencies:**

cd backend  <br>
npm install  <br>

**3. Setup Environment Variables **
Create a .env file in the backend folder and set the following environment variables:  <br>

**makefile**
MONGODB_URI=your_mongodb_connection_string  <br>
JWT_SECRET=your_jwt_secret  <br>
PORT=5000  <br>

### 4. Install Frontend Dependencies  <br>
Go to the frontend directory and install the necessary dependencies:

cd ../frontend
npm install
5. Run the Application
**Backend **
To start the backend server, run:  <br>

cd backend  <br>
npm run dev  <br>
**Frontend **
**To start the frontend development server, run: **

cd frontend  <br>
npm run dev  <br>
API Documentation  <br>

DoctorJob/  <br>
│  <br>
### ├── backend/               # Backend server (Node.js + Express.js)  <br>
│   ├── controllers/       # Controllers for handling requests  <br>
│   ├── models/            # Mongoose models for DB  <br>
│   ├── routes/            # API routes  <br>
│   ├── middlewares/       # Authentication & Authorization  <br>
│   ├── .env               # Environment variables  <br>
│   ├── server.js          # Server entry point  <br>
│   └── package.json       # Backend dependencies  <br>
│  <br>
### ├── frontend/              # Frontend (React.js)  <br>
│   ├── src/               # Source code for frontend  <br>
│   ├── components/        # React components  <br>
│   ├── redux/             # Redux slices for state management  <br>
│   ├── public/            # Public files (e.g., index.html)  <br>
│   ├── package.json       # Frontend dependencies  <br>
│   └── vite.config.js     # Vite configuration  <br>


### Acknowledgements
React.js for building the frontend.  <br>
Node.js and Express.js for the backend.  <br>
MongoDB for the database.
