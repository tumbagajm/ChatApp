// Dependencies and Modules
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoute');

// server setup
const app = express();
app.use(express.json());
app.use(cors({origin:true}));

app.use('/home', userRoutes);
app.listen(4001);

module.exports = {app};