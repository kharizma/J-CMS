const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express();
const port = 4000;

app.engine('hbs', exphbs({
  defaultLayout: 'empty',
  extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static('src/static'));
app.set('views', path.join(__dirname,'views'));

app.get('/', (req,res) => {
  res.render('login');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})