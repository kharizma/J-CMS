const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express();
const port = 3000;

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname,'views'));

app.get('/', (req,res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})