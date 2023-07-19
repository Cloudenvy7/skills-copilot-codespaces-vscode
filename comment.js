// Create web server with express
// Create a route for posting comments
// Create a route for getting comments

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const comment = require("./comment");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Get all comments
app.get("/api/comments", function(req, res) {
  res.json(comment.comments);
});

// Post a comment
app.post("/api/comments", function(req, res) {
  const newComment = {
    id: comment.comments.length + 1,
