const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.get("Welcome to the App");
})

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
})