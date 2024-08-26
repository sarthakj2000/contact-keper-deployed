const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express.json({ extended: true })); // for req.body

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
