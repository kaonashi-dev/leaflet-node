const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const { PORT } = require('./config')

const app = express();
const serve = http.createServer(app);

const socket = socketIO(serve);
require('./socket')(socket);

const router = require('./routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(router);

app.use(express.static(path.join(__dirname,'public')))

serve.listen(PORT, () => console.log(`server on port: ${PORT}`))