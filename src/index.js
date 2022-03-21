const express = require('express');

const app = express();
const portNumber = 3000;
const logMessage = `🔥 Server started at http://localhost:${portNumber} with a hot🥵 reload`;

const routes = require('./routes');

app.use(express.json());
app.use(routes);
app.listen(portNumber, () => console.log(
  logMessage,
));
