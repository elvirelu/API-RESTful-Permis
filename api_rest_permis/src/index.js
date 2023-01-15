const express = require("express"); 
const bodyParser = require("body-parser");

const v1Router = require("./v1/routes/Routes");

const app = express(); 
const PORT = process.env.PORT || 4000; 
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use(bodyParser.json());
app.use("/api/v1", v1Router);

app.listen(PORT, () => { 
    console.log(`API écoute la porte ${PORT}`); 
});