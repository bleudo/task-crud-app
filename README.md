# Task Management CRUD Application

This is a web-based task management application that implements CRUD (Create, Read, Update, Delete) operations using modern web development technologies.

## Technologies Used

- **Frontend**: React.js with Tailwind CSS
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL
- **ORM**: No ORM used, direct SQL queries are employed
- **Other tools**: Axios for HTTP requests, dotenv for environment variables

## Features

- Create new tasks with title and description
- View list of existing tasks
- Update existing tasks
- Delete tasks
- Responsive and attractive user interface

## Project Structure

The project is organized into two main folders:

- `/client`: Contains the React frontend application
- `/server`: Contains the Express backend server

## Prerequisites

- Node.js (version 14 or higher)
- npm (usually comes with Node.js)
- PostgreSQL

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/bleudo/task-crud-app.git
   cd task-crud-app
   ```

2. Install server dependencies:
   ```
   cd server
   npm install
   ```

3. Install client dependencies:
   ```
   cd ../client
   npm install
   ```

4. Set up the PostgreSQL database and create a `.env` file in the `server` folder with the following variables:
   ```
   DB_USER=your_username
   DB_HOST=localhost
   DB_NAME=your_database_name
   DB_PASSWORD=your_password
   DB_PORT=5432
   PORT=3000
   ```

## Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. In another terminal, start the client:
   ```
   cd client
   npm start
   ```

3. Open your browser and visit `http://localhost:3000`

## Contributing

Contributions are welcome. Please open an issue to discuss major changes before creating a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.