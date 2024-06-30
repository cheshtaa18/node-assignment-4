const express = require('express');
const app = express();
const port = 3000;

// Middleware to log request details
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Route for the about page
app.get('/about', (req, res) => {
  res.send('Welcome to the About Page!');
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send('404: Page Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
