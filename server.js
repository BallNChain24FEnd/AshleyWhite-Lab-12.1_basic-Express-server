import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Create our Express application
const app = express();

// Set the port for our server
const PORT = process.env.PORT || 3005;

// Get the directory where server.js is located
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// GET request for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET request for the contact page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
