const express = require("express");

const app = express();

const PORT = 3333; //Porta para localizaar

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
