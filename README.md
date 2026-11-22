# The Daily Grind — Basic Express Server

## Description

This project was created for Module 12, Lab 12.1: Build a Basic Express Server.

The Daily Grind is a fictional coffee shop website that uses Node.js and Express to serve two HTML pages: a homepage and a contact page.

## Technologies Used

- Node.js
- Express.js
- HTML5
- Git and GitHub

## Installation and Setup

1. Clone the GitHub repository.
2. Open the project folder in VS Code.
3. Install the required dependencies:

   `npm install`

4. Start the Express server:

   `npm start`

5. Open the website in a browser.

## Testing

The Express server was successfully tested locally using port 3005.

- Homepage: http://localhost:3005/
- Contact page: http://localhost:3005/contact

Both routes displayed the correct HTML pages in the browser, and the navigation links allowed movement between the homepage and contact page.

## Reflection Questions

### 1. What is the difference between `res.send()` and `res.sendFile()`? When would you use one over the other?

The `res.send()` method sends a response directly to the client, such as text or HTML content. The `res.sendFile()` method sends an existing file from the server to the client.

I would use `res.send()` for a simple message or response that does not require a separate file. I would use `res.sendFile()` when I want to display an HTML page stored in my project. For this lab, I used `res.sendFile()` to serve the homepage and contact page.

### 2. Why is the `path` module necessary when serving files? What could go wrong if you just used a relative path like `'public/index.html'`?

The Node.js `path` module helps create reliable file paths. Express's `res.sendFile()` normally requires an absolute file path unless a root directory is specified.

A relative path such as `'public/index.html'` might not resolve correctly because it depends on the application's working directory. This could cause Express to fail to locate the file.

For this lab, I used `path.join()` with `__dirname` to create an absolute path to each HTML file.

### 3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?

To add a menu page, I would first create a new file called `menu.html` inside the `public` folder.

Next, I would add another GET route in `server.js` using `app.get('/menu', ...)` and `res.sendFile()` to serve the new HTML file.

I would also update the navigation links on the existing pages so visitors could access the menu.

Finally, I would save my changes, test `http://localhost:3005/menu` in the browser, and commit and push the changes to GitHub.

## References

- Course Module 12 — Express.js lecture materials and instructor-provided Express example code.
- Express.js Documentation. *Express 5.x API Reference.* https://expressjs.com/en/5x/api.html
- Express.js Documentation. *Basic Routing.* https://expressjs.com/en/starter/basic-routing.html
- Node.js Documentation. *Path Module.* https://nodejs.org/api/path.html
- Node.js Documentation. *ECMAScript Modules.* https://nodejs.org/api/esm.html