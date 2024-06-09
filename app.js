const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const env = process.env;
const API = env.API_URL;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());

const authRoutes = require('./routes/auth');
app.use(`${API}/`, authRoutes);

// Start the server
const hostname = env.HOST;
const port = env.PORT;

mongoose.connect(env.MONGO_DB_CONNECTION_STRING).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});

app.listen(port, hostname, () => {
    console.log('Server started on htttp://' + hostname + ':' + port);
});