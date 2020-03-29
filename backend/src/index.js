const express = require('express'); //chamando o express
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
//ouvindo a porta 3333
app.listen(3333);