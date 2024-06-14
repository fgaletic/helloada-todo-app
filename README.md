# helloada-todo-app

Welcome to helloada-todo-app! This is a simple yet powerful todo application built with love.

## Features

- **Create and Manage Todos:** Easily add, edit, and organize your todo tasks.
- **Mark Tasks as Completed:** Keep track of your progress by marking tasks as completed.
- **Delete Tasks:** Remove tasks that are no longer needed.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/fgaletic/helloada-todo-app.git
   ```

   Navigate to the project directory:

   ```sh
   cd helloada-todo-app
   ```

   Install the dependencies:

   ```sh
   npm install
   ```

2. Usage

   Start the application:

   ```sh
   npm start
   ```

   Open your browser and go to [http://localhost:3000](http://localhost:3000).

   Start managing your todos!

3. Contributing

   We welcome contributions! If you have ideas for improvements or new features, feel free to submit a pull request. Please follow the contributing guidelines.

4. License

   This project is licensed under the MIT License. See the LICENSE file for more details.

5. Technical Choices

   Database Selection: MongoDB vs. SQL

   For this project, we chose MongoDB over traditional SQL databases for the following reasons:

   - Flexibility: MongoDB, being a NoSQL database, allows for flexible schema design. This is particularly useful for a todo application where task structures can vary and evolve over time.
   - Scalability: MongoDB's horizontal scaling capabilities make it suitable for handling large amounts of data and high-traffic applications.
   - Ease of Use: MongoDB's JSON-like document storage is intuitive and aligns well with the application's data model, simplifying the development process.

6. Future Plans

   Application Structure

   - Router Improvements: Split the main router into separate routers for better organization and scalability.
   - Additional Routes: Add more routes to handle new features and functionalities.

   Authentication with JWT

   - JWT Integration: Implement JWT (JSON Web Tokens) for authentication and authorization.
   - Security: JWT provides a secure way to authenticate users and protect routes.
   - Stateless Authentication: Ideal for RESTful APIs, as JWT allows for stateless authentication.
   - Easy Validation: JWT tokens can be easily validated and decoded, offering a reliable authentication mechanism.

7. Deployment

   Serverless Deployment on Koyeb:

   - Scalability: Koyeb offers serverless infrastructure, allowing the application to scale efficiently based on demand.
   - Cost Optimization: Serverless functions and container management help in optimizing costs.

   Frontend Hosting on Netlify:

   - Continuous Deployment: Netlify provides seamless CI/CD, ensuring that new updates are deployed automatically.
   - CDN-Powered Hosting: Netlify’s CDN-powered hosting ensures fast and reliable delivery of the application to users.

   Thank you for using the todo app! Happy task managing!