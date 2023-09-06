const express = require ('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');
console.log(secretKey);
const { generateToken } = require('./token'); // Replace with the correct path to your token.js file



const app = express ();
const port = 5000;

// Configure express-session
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true,

}));

// import {userHistory} from 'react-router-dom'

app.use(cors());

app.use(bodyParser.json());

// app.use(
//   session({
//     secret: secretKey,
//     resave: false,
//     saveUninitialized: true,
//   })
// );

app.use(
    bodyParser.urlencoded
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
// get all students api

app.get('/students/all', function (req , res){
    db.query('SELECT * FROM students', function (error, results ){
        if (!error){
            return res.send({
                error: false,
                data: results,
                message: 'students list.'
            });
        } else {
            throw error;
        }

    });
});

//todo check the code
// students get by id


app.get('/students/:id', function (req,res){
    let registration_number = req.params.id;
    if (!registration_number){
        return res.status(400).send({
            error: true,
            message: 'Please provide fundraiser_id'
        });
    }
// data query
    db.query('SELECT * FROM students where id=?', registration_number , function (error, results, fields ){
        if (!error){
            return res.send({
                error: false,
                data: results[0],
                message: 'students  list.'
            });
        } else {
            throw error;
        }

    });
});



// API for student login by registration number and password
//login form
app.post('/students/login', (req, res) => {
  const { registration_number, password } = req.body;

  if (!registration_number || !password) {
    return res.status(400).json({
      error: true,
      message: 'Both registration_number and password are required fields',
    });
  }

  // Query to check if the student with the given registration number and password exists
  const checkStudentQuery = 'SELECT * FROM students WHERE  registration_number = ? AND password = ?';

  db.query(checkStudentQuery, [registration_number, password], (error, results) => {
    if (error) {
      console.error('Error checking student:', error);
      return res.status(500).json({
        error: true,
        message: 'Error checking student',
      });
    }

    if (results.length === 0) {
      return res.status(401).json({
        error: true,
        message: 'Invalid registration number or password',
      });
    }


    const user = results[0];
    const token = generateToken(user);

    // student is successfully authenticated, body
    return res.status(200).json({
      error: false,
      message: 'Login successful',
      user: {
        id: user.id, // Include the 'id' from the user object
        // Include other user details if needed
      },
      token: token,
       // You can send user data if needed
    });
  });
});



// API for students to create accounts
// sign up form
app.post('/students/signUp', (req, res) => {
    const  {
    first_name,
    last_name,
    registration_number,
    email,
    password,
    phone_number } = req.body;
    //todo set the token and  session

    if (!first_name || !last_name || !registration_number || !email || !password || !phone_number) {
        return res.status(400).json({
            error: true,
            message: 'Please provide all required information.'
        });
    }

    const dataToInsert = {
        first_name,
        last_name,
        registration_number,
        email,
        password,
        phone_number
    };
    // todo check if the student is valid on  the database

    db.query('INSERT INTO students SET ?', dataToInsert, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: true,
                message: 'An error occurred while processing your request.'
            });
            }

            return res.status(201).json({
                error: false,
                message: 'student uploaded successfully.'
            });
        });
    });


/********************institution********** */

// API to register institution
// institution registration form

app.post('/institution/register', (req, res) => {
    const { institution_password, leader_position, institution_email, institution_name, institution_leader, adress} = req.body;

    if (!institution_password || !leader_position || !institution_email || !institution_name ||!institution_leader || !adress) {
      return res.status(400).json({
        error: true,
        message: 'fill all the data',
      });
    }

    // Check if the email already exists in the database
    const checkEmailQuery = 'SELECT COUNT(*) as count FROM institution WHERE institution_email = ?';

    db.query(checkEmailQuery, [institution_email], (error, results) => {
      if (error) {
        console.error('Error checking email:', error);
        return res.status(500).json({
          error: true,
          message: 'Error checking email',
        });
      }

      const emailExists = results[0].count > 0;

      if (emailExists) {
        return res.status(409).json({
          error: true,
          message: 'Email already exists',
        });
      }

      // If the email doesn't exist, proceed to insert the user
      const insertQuery = 'INSERT INTO institution (institution_password, leader_position, institution_email, institution_name, institution_leader, adress) VALUES (?, ?, ?, ?, ?, ?)';

      db.query(insertQuery, [institution_password, leader_position, institution_email, institution_name, institution_leader, adress], (error, results) => {
        if (error) {
          console.error('Error registering institution:', error);
          return res.status(500).json({
            error: true,
            message: 'Error registering institution',
          });
        }

        console.log('your institution registered successfully');
        return res.status(201).json({
          error: false,
          message: 'your institution registered successfully',
        });
      });
    });
  });
// institution log in
app.post('/institution/login', (req, res) => {
    const { institution_email, institution_password } = req.body;

    if (!institution_password || !institution_email) {
      return res.status(400).json({
        error: true,
        message: 'Both email and password are required fields',
      });
    }

    // Query to check if the institution with the given email and password exists
    const checkInstitutionQuery = 'SELECT * FROM institution WHERE institution_email = ? AND institution_password = ?';

    db.query(checkInstitutionQuery, [institution_email, institution_password], (error, results) => {
      if (error) {
        console.error('Error checking institution:', error);
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

      // Institution is successfully authenticated
      return res.status(200).json({
        error: false,
        message: 'Login successful',
        user: results[0], // You can send Institution data if needed
      });
    });
  });


/*****************to register the valid candidates********** */



/*this should be made by the institution in the */
app.post('/valid_candidate/register', (req, res) => {
    const  {
        first_name,
        last_name,
        registration_number,
        study_at,
        email,
        ammmount_remained,
        phone_no,
        control_number,
        have_father,
        have_mother,
        candidates_disability,
        mother_disability,
        father_disability} = req.body;

    if (!first_name || !last_name || !registration_number || !study_at || !email || !ammmount_remained || !phone_no || !control_number) {
        return res.status(400).json({
            error: true,
            message: 'Please provide basic required information.'
        });    }

    const dataToInsert = {
        first_name,
        last_name,
        registration_number,
        study_at,
        email,
        ammmount_remained,
        phone_no,
        control_number,
        have_father,
        have_mother,
        candidates_disability,
        mother_disability,
        father_disability};

    db.query('INSERT INTO valid_candidates SET ?', dataToInsert, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: true,
                message: 'An error occurred while processing your request.'
            });
        }

        return res.status(201).json({
            error: false,
            data: results,
            message: 'student uploaded successfully.'
        });
    });
});


