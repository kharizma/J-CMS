const express = require('express')
const hbs = require('handlebars')

const app = express();
const port = 3000;

const template = hbs.compile("Name: {{name}}");

app.get('/', (req,res) => res.send(template({ name: "Nils" })));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})