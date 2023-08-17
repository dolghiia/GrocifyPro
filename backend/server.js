const express = require('express')
const grocer_routes = require('./routes/grocer')
const list_routes = require('./routes/grocery_list')
const pull_data = require('./lib/pull_grocery_data');

const app = express()
app.set("view engine", "ejs")

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/grocer', grocer_routes)
app.use('/api/grocery_list', list_routes)

pull_data.pull_scraped_data().then(() => {
    app.listen(4000, () => {
      console.log(`Listening on port 4000`)
    });
  });