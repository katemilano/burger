const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const routes = require('./controllers/controller.js');

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Routes
app.use(routes);

//listening to server
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
