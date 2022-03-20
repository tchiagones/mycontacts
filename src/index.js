const express = require('express');

const app = express();
const portNumber = 3000;
const logMessage = `🔥 Server started at http://localhost:${portNumber} with a hot🥵 reload`;

const routes = require('./routes');

// app.use((request, response) => {
//   request.appId = 'MeuAppId';

//   response.sendStatus(200);
// });

app.use(routes);
app.listen(portNumber, () => console.log(
  logMessage,
));
