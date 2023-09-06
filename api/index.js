const express = require ('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express ();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded
    (
        {
            extended:true
        })
);

// Database connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'elimufund',

});

db.connect( err =>{
    if (err) throw err;
    console.log('Connected to Mysql database');
});

app.listen(port, () =>{
    console.log('Server is running on port ${port}')
});

app.get('/fundraisers', function (req,res){
    db.query('SELECT * FROM fundraisers', function (error, results, fields ){
        if (!error){
            return res.send({
                error: false,
                data: results,
                message: 'fundraisers list.'
            });
        } else {
            throw error;
        }

    });
})

app.get('/fundraisers/:id', function (req,res){
    let fundraiser_id = req.params.id;
    if (!fundraiser_id){
        return res.status(400).send({
            error: true,
            message: 'Please provide fundraiser_id'
        });   
    }

    db.query('SELECT * FROM fundraisers where id=?', fundraiser_id , function (error, results, fields ){
        if (!error){
            return res.send({
                error: false,
                data: results[0],
                message: 'fundraiser list.'
            });
        } else {
            throw error;
        }

    });
})


app.post('/register', function(req, res) {
  const firstname = req.body.firstname;
  const surname = req.body.surname;
  const studentId = req.body.studentId;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO fundraisers (firstname, surname, studentId, email, password) VALUES (?,?,?,?,?)",
    [firstname, surname, studentId, email, password],
    (err, results) => {
      if (err) {
        console.error('Error registering user:', err);
        return res.status(500).json({
          error: true,
          message: 'Error registering user',
        });
      } else {
        // User registered successfully
        return res.status(200).json({
          error: false,
          message: 'Registration successful',
        });
      }
    }
  );
});





app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({
        error: true,
        message: 'Both email and password are required fields',
      });
    }
  
    // Query to check if the user with the given email and password exists
    const checkUserQuery = 'SELECT * FROM fundraisers WHERE email = ? AND password = ?';
  
    db.query(checkUserQuery, [email, password], (error, results) => {
      if (error) {
        console.error('Error checking user:', error);
        return res.status(500).json({
          error: true,
          message: 'Error checking user',
        });
      }
  
      if (results.length === 0) {
        return res.status(401).json({
          error: true,
          message: 'Invalid email or password',
        });
      }
  
      // User is successfully authenticated
      return res.status(200).json({
        error: false,
        message: 'Login successful',
        user: results[0], // You can send user data if needed
      });
    });
  });
