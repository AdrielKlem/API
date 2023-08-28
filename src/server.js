const express = require("express");

const routes = require("./routes");


const app = express();
app.use(express.json());

app.use(routes);

const PORT = 3333; // Door to localize 

app.listen(PORT/* Waiter */, () => console.log(`Server is running on Port ${PORT}`));
