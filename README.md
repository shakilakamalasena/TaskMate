
# TaskMate Web App

This is a full-stack MERN (MongoDB, Express, React, Node.js) application called TaskMate. Below are the steps to clone and set up the project.

## Prerequisites
- Node.js (v18.X.X or higher)

## Cloning the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/shakilakamalasena/TaskMate.git
   ```
2. Navigate into the project directory:
   ```bash
   cd TaskMate
   ```

## Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd api
   ```
   
2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   - Create a `.env` file in the `api/` folder based on the provided `.env.example` file.
   - Replace `<your-username>` and `<your-password>` with your MongoDB credentials in the following connection string:
     ```
     mongodb+srv://<your-username>:<your-password>@cluster0.elud2yp.mongodb.net/site?retryWrites=true&w=majority&appName=Cluster0
     ```

4. Start the backend server using nodemon:
   ```bash
   nodemon app.js
   ```

## Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd client
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

The frontend will be running on `http://localhost:5173`, and the backend on `http://localhost:8800` or whichever port is configured in the backend.

## Additional Notes
- Ensure you have access to MongoDB Atlas batabase of this project.
- The backend and frontend need to be running concurrently for the app to function correctly.
