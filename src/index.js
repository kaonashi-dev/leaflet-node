const path = require('path');
const express = require('express');

const { PORT } = require('./config')

const app = express();

const router = require('./routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(router);

app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT, () => console.log(`server on port: ${PORT}`))