# W2S Solutions Assignment
This project is a Restful API for user authentication and CRUD operations for customers. 
The backend is built using Express.js and MongoDB as the database.

# Prerequisites
- Node.js installed on your machine
- MongoDB installed on your machine
- A text editor of your choice

# Installation
To run the applications locally, first clone the repository to your local machine:

git clone https://github.com/Yousuf-Zahid/w2s-solutions-assignment.git

Then, navigate to the project directory and install the dependencies:

    cd w2s-solutions-assignment
    npm install

# Running the Application

    To start the application, run the command:

    npm start

This will start the server at http://localhost:8080/ The server provides an API endpoint for fetching data. 

# API Endpoints
 * User Authentication
    POST /signup: Creates a new user account.
    POST /login: Logs in an existing user.

 * Customers
    GET /customers: Retrieves all customers.
    GET /customers/:id: Retrieves a single customer.
    POST /customers: Creates a new customer.
    PUT /customers/:id: Updates an existing customer.
    DELETE /customers/:id: Deletes a customer.

# Postman Collection
    A Postman collection for this project is included in this repository. You can import the collection into Postman to test the API endpoints. To import the collection, follow these steps:

    Open Postman and click on the "Import" button.
    Select the "Import From Link" option.
    Enter the following URL in the input field: https://raw.githubusercontent.com/Yousuf-Zahid/w2s-solutions-assignment/main/W2S_solutions.postman_collection.json
    Click on "Import" to import the collection into Postman.


# Environment Variables
    The following environment variables need to be set in the .env file:

    DB_CONNECTION: The MongoDB connection string.
    JWT_SECRET: The secret key used to sign JSON Web Tokens.
    PORT: The port number the server will listen on.
    
# Conclusion
    This project is a basic example of a Restful API using Express.js and MongoDB. You can use this as a starting point for more complex applications. If you have any questions or suggestions, feel free to open an issue or submit a pull request.