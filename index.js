const express = require('express'); // Import Express framework
const app = express(); // Initialize an Express app

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the basic web API!' });
});

// Example API route
app.get('/api/example', (req, res) => {
  res.json({ data: 'This is an example API response!' });
});

// Start the server
const PORT = process.env.PORT || 3110; // Use the PORT environment variable or default to 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
