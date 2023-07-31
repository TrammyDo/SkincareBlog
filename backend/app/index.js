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
    await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [req.body[0], req.body[1], req.body[2]])
  }  
  catch (e) {
    console.log(e)
    res.json ({accountCreated : false})
  }
})

app1.get("/getPosts", async (req, res) => {
  try {
    let results = []

    results = await pool.query('SELECT * FROM posts')
    res.send ({posts : results.rows})
  }  
  catch (e) {
    console.log(e)
  }
})

app1.post("/login", async (req, res) => { 
  try {
    let results = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [req.body[0], req.body[1]])

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

app1.post("/postEntry", async (req, res) => { 
  try {
    await pool.query('INSERT INTO posts (title, body, prodtype, dateposted) VALUES ($1, $2, $3, $4)', [req.body[0], req.body[1], req.body[2], req.body[3]])
  }
  catch (error) {
    console.error(error.message)
  }
})

app1.post("/addComment", async (req, res) => {
  try {
    await pool.query('INSERT INTO comments (postid, comment) VALUES ($1, $2)', [req.body[0], req.body[1]])
  }  
  catch (e) {
    console.log(e)
  }
})

app1.post("/getComments", async (req, res) => {
  try {
    let results = []

    results = await pool.query('SELECT * FROM comments WHERE postid = $1', [req.body[0]])
    res.send ({posts : results.rows})
  }  
  catch (e) {
    console.log(e)
  }
})



app1.listen(port, () => {  
  console.log(`Listening on port ${port}`)
})

