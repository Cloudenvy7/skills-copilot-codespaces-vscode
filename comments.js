// Create web server application

// Import modules
const express = require('express');
const bodyParser = require('body-parser');

// Create web server
const app = express();

// Configure web server
app.use(bodyParser.json());

// Define routes
app.get('/comments', function(request, response) {
    response.status(200).json([
        {
            id: 1,
