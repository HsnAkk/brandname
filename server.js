const express = require('express');
const path = require("path");
const data  = require('./data');
const cors = require('cors');

var corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
};

// initialize express
const app = express();

// cors
app.use(cors(corsOption));

// static folder
app.use(express.static(path.join(__dirname + "/public")));

// route
app.get('/', (req, res) => {
    res.json(data);
});

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


