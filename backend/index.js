const express = require ('express')
const app = express ()
const port = 8080

app.use (express.json())
app.use (express.urlencoded ({extended: false}))

app.get('/', function(req, res) {
  res.sendFile('/index.html',  {root: __dirname})
  console.log (__dirname)
});

app.get ('/xyza', (req, res) => {
  res.send ('hi')
})

app.listen(port, () => {  
  console.log(`Listening on port ${port}`)
})