const express = require('express');
const router = express.Router();
const app = express();
const defaultrouter = require('./routes/user');
const userrouter = require('./routes/adduser');
app.use(defaultrouter);
app.use(userrouter);

app.listen(3000);