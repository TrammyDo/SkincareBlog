import express from 'express'
import app from 'express'
const port = 8080
import cors from 'cors'
import pool from '../../db/db.js'

var corsOptions = {
  origin: `http://localhost:3000`
}

var app1 = app();
app1.use(cors(corsOptions));
app1.use (express.json())
app1.use (express.urlencoded ({extended: false}))

app1.post("/registration", async (req, res) => {
  try {
    console.log(req);
    await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [req.body[0], req.body[1], req.body[2]])
  }  
  catch (e) {
    console.log(e)
    res.json ({accountCreated : false})
  }
})

app1.post("/login", async (req, res) => { 
  try {
    let results = await pool.query('SELECT * FROM users WHERE email = $1 AND pass = $2', [req.body[0], req.body[1]])

    if (results.rowCount) {
      res.send (JSON.stringify(`Hello ${req.body[0]}!`))
    }
    else {
      res.json ({login : false})
    }
  }
  catch (error) {
    console.error(error.message)
  }
})

app1.listen(port, () => {  
  console.log(`Listening on port ${port}`)
})

