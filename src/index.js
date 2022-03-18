const express = require('express');

const app = express();
const portNumber = 3000;

app.listen(portNumber, () => console.log(
  `🔥 Server started at http://localhost:${portNumber} with a hot🥵 reload`,
));
