const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const router = require('./routes/routes_auth')

const app = express();
const port = 4000;

app.engine('hbs', exphbs({
  defaultLayout: 'empty',
  extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static('src/static'));
app.set('views', path.join(__dirname,'views'));

app.use('/', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})