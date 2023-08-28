const express = require("express");

const app = express();

app.get("/", (request, response) => {
    response.send("Hello, World!")
});

const PORT = 3333; // Door to localize 

app.listen(PORT/* Waiter */, () => console.log(`Server is running on Port ${PORT}`));
