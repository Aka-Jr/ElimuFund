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
    console.log(`Server is running on port ${port}`)
    });
// get all students api

// api for log in for all the users

// Import required modules and configure your app

app.post('/login', (req, res) => {
    const { identity, password } = req.body;
  
    if (!identity || !password) {
      return res.status(400).json({
        error: true,
        message: 'Please provide both identity and password.',
      });
    }
  
    // Your authentication logic here
    let query, table;
  
    // Search in the admin table
    query = 'SELECT * FROM admin WHERE email = ? AND password = ?';
    table = 'admin';
  
    db.query(query, [identity, password], (adminError, adminResults) => {
      if (adminError) {
        console.error(`Error when fetching data from ${table}`, adminError);
        return res.status(500).json({
          error: true,
          message: `Error occurred when fetching data from ${table}`,
        });
      }
  
      if (adminResults.length > 0) {
        // Admin successfully authenticated
        const userData = adminResults[0];
        return res.status(200).json({
          error: false,
          message: `Login successful for ${table}`,
          data: userData,
        });
      } else {
        // If not found in admin table, continue searching in other tables
        query = 'SELECT role FROM users WHERE identity = ?';
        table = 'users';
  
        db.query(query, [identity], (userError, userResults) => {
          if (userError) {
            console.error('Error in checking the user', userError);
            return res.status(500).json({
              error: true,
              message: 'An error occurred during user verification.',
            });
          }
  
          const user = userResults[0];
  
          if (!user) {
            return res.status(401).json({
              error: true,
              message: 'User not found.',
            });
          }
  
          const role = user.role;
  
          // Continue checking in other tables based on role
          switch (role) {
            case 1: // Admin (already checked)
              break;
            case 2: // Institution
              query = 'SELECT * FROM institution WHERE institution_email = ? AND institution_password = ?';
              table = 'institution';
              break;
            case 3: // Student
              query = 'SELECT * FROM students WHERE registration_number = ? AND password = ?';
              table = 'students';
              break;
            default:
              return res.status(401).json({
                error: true,
                message: 'Invalid user role.',
              });
          }
  
          db.query(query, [identity, password], (innerError, results) => {
            if (innerError) {
              console.error(`Error when fetching data from ${table}`, innerError);
              return res.status(500).json({
                error: true,
                message: `Error occurred when fetching data from ${table}`,
              });
            }
  
            if (results.length === 0) {
              return res.status(401).json({
                error: true,
                message: 'Invalid credentials.',
              });
            }
  
            // The user successfully authenticated
            const userData = results[0];
  
            return res.status(200).json({
              error: false,
              message: `Login successful for ${table}`,
              data: userData,
            });
          });
        });
      }
    });
  });

  
  app.post('/students/signUp', (req, res) => {
    const {
      first_name,
      last_name,
      registration_number,
      email,
      password,
      phone_number,
    } = req.body;
  
    // Perform input validation and error handling here
  
    // For example, you can check if the email is already in use
    db.query('SELECT * FROM students WHERE email = ?', [email], (error, results) => {
      if (error) {
        console.error('Error in checking duplicate email', error);
        return res.status(500).json({
          error: true,
          message: 'An error occurred during email verification.',
        });
      }
  
      if (results.length > 0) {
        return res.status(400).json({
          error: true,
          message: 'Email is already in use.',
        });
      }
  
      // Insert the new student record into the database
      db.query('INSERT INTO students (first_name, last_name, registration_number, email, password, phone_number) VALUES (?, ?, ?, ?, ?, ?)',
        [first_name, last_name, registration_number, email, password, phone_number],
        (insertError, insertResult) => {
          if (insertError) {
            console.error('Error when inserting student data', insertError);
            return res.status(500).json({
              error: true,
              message: 'An error occurred during student registration.',
            });
          }
  
          return res.status(201).json({
            error: false,
            message: 'Student registered successfully.',
            data: insertResult,
          });
        });
    });
  });
  