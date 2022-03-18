const express = require('express');

const app = express();
const portNumber = 3000;
const logMessage = `🔥 Server started at http://localhost:${portNumber} with a hot🥵 reload`;

app.get('/', (request, response) => {
  response.send(logMessage);
});

app.listen(portNumber, () => console.log(
  logMessage,
));
