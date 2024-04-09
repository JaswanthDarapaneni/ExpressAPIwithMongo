### Project Overview

This project is a Node.js web application built with Express.js and MongoDB. It provides APIs for managing users and products. Below is an overview of the project structure and how to run it.


### Project Structure

- **`app.js`**: Main entry point of the application.
- **`routes`**: Directory containing route handlers for different endpoints.
  - **`productRoutes.js`**: Route handler for product-related endpoints.
  - **`userRoutes.js`**: Route handler for user-related endpoints.
- **`env`**: Directory containing environment configuration files.
  - **`config.js`**: Configuration file for database connection.
- **`models`**: Directory containing Mongoose models for defining data schemas.
- **`controllers`**: Directory containing controller functions for handling business logic.
- **`middlewares`**: Directory containing custom middleware functions.
- **`views`**: Directory containing HTML views (if any).
- **`public`**: Directory containing static assets (if any).

### Setup

1. Clone the repository from GitHub.
2. Install dependencies using `npm install` or `yarn install`.
3. Configure MongoDB connection in `env/config.js`.
4. Start the server using `npm start` or `yarn start`.


### Note

<h2>Application Hosted at: <a>https://expressapiwithmongo.onrender.com</a></h2>
1. If the link not work don't feel hested. just try to run the application local server . That will be work fine. all you need to do is change the config file
databseUrl = `local mongoDb uri`. 
**OR
2. You wanted to test throw server just mail me . I will restart server `jaswanthdarapaneni19@gmail.com`.
**OR 
3. I will provide the hosted DatabaseURI. Thia will be work from local server. becouse i hosted dabase in saparate server.

### Deployment
This project is deployed on [Render](https://render.com/). To deploy:
1. Sign up for a Render account.
2. Create a new web service and link it to your GitHub repository.
3. Configure environment variables for MongoDB connection.
4. Deploy the service.

