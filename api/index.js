const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');
console.log(secretKey);
// const { generateToken } = require('./token'); // Replace with the correct path to your token.js file



const app = express();
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

app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  bodyParser.urlencoded
    (
      {
        extended: true
      })
);

// Database connection

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'elimufund',

});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to Mysql database');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});


// Import required modules and configure your app

// api for log in for all the users

app.post("/login", (req, res) => {
  const { identity, password } = req.body;

  // checking if there is unfilled field
  if (!identity || !password) {
    return res.status(400).json({
      Error: true,
      message: "please fill all the required information",
    });
  }

  // query to fetch the role of the user in our database

  db.query(
    "SELECT role FROM users WHERE identity = ?",
    [identity],
    (error, results) => {
      if (error) {
        console.error("error in checking the user", error);
        return res.status(500).json({
          error: true,
          message: "error occur on server side during checking the user",
        });
      }
      // todo insert action when user is not found

      // check if there is any results
      const user = results[0];
      //if the user role = 1 query from admin
      if (user.role === 1) {
        db.query(
          "SELECT * FROM admin WHERE  email = ?  AND password = ?",
          [identity, password],
          (error, results) => {
            if (error) {
              return res.status(500).json({
                error: true,
                message: "error has occured when fetching data fom admin",
              });
            }

            // the admin successifully authenticated
            const admin = results[0];

            // Store user information in the session for admins

            
            req.session.user = {
              role: "admin",
              email: admin.email,
              firstName: admin.first_name,
              lastName: admin.last_name,
              id: admin.id,
            };
            return res.status(200).json({
              error: false,
              message: "log in successifully for admin",
              role: "1",
              admin: {
                first_name: admin.first_name,
                last_name: admin.last_name,
                email: admin.email,
                id: admin.id,
              },
            });
          }
        );
      }

      // if the role = 2 query for institution
      else if (user.role === 2) {
        db.query(
          "SELECT * FROM institution WHERE  institution_email = ?  AND institution_password = ?",
          [identity, password],
          (error, results) => {
            if (error) {
              return res.status(500).json({
                error: true,
                message: "error has occured when fetching data fom institution",
              });
            }

            // the institution successifully authenticated
            const institution = results[0];
                    // Store user information in the session for admins
        req.session.user = {
            id: institution.id,
          };

          console.log("User information:", req.session.user);
            return res.status(200).json({
              error: false,
              message: "log in successifully for admin",
              role: "2",
              institution: {
                first_name: institution.institution_name,
                institution_email: institution.institution_email,
                institution_leader: institution.institution_leader,
              },
            });
          }
        );
      }
      // if the role = 3 work on the  student
      else {
        db.query(
          "SELECT * FROM students WHERE  registration_number = ?  AND password = ?",
          [identity, password],
          (request, results) => {
            if (error) {
              return res.status(500).json({
                error: true,
                message: "error has occured when fetching data fom institution",
              });
            }

            // the student successifully authenticated
            const student = results[0];

            req.session.user = {
                id: student.registration_number,
              };
              
              console.log(user);
            return res.status(200).json({
              error: false,
              message: "log in successifully for student",
              role: "3",
              student: {
                name: "debora",
                id: student.registration_number,
                first_name: student.first_name,
                last_name: student.last_name,
                phone_number: student.phone_number,
              },
            });
          }
        );
      }
    }
  );
});



// signUp page

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

  });

    // insert student in the user table
      // Check if the email already exists in the database
  const checkEmailQuery =
  "SELECT COUNT(*) as count FROM users WHERE identity = ?";

db.query(checkEmailQuery, [registration_number], (error, results) => {
  if (error) {
    console.error("Error checking email:", error);
    return res.status(500).json({
      error: true,
      message: "Error checking email",
    });
  }

  const identityExists = results[0].count > 0;

  if (identityExists) {
    return res.status(409).json({
      error: true,
      message: "registration number already exists",
    });
  }

  // If the registration number doesn't exist, proceed to insert the user

  // inserting the student to user table
  db.query("INSERT INTO users (role, identity) VALUES( ?, ?)", [3, registration_number],
    (error, results) => {
      if (error) {
        console.error("Error inserting student to users:", error);
        return res.status(500).json({
          error: true,
          message: "Error inserting student",
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

/****************************************institution registration****************************** */

// API to register institution
// institution registration form
app.post("/institution/registeration", (req, res) => {
  const {
    institution_password,
    leader_position,
    institution_name,
    institution_email,
    institution_leader,
  } = req.body;

  if (
    !institution_password ||
    !leader_position ||
    !institution_email ||
    !institution_name ||
    !institution_leader
  ) {
    return res.status(400).json({
      error: true,
      message: "Fill in all the required fields",
    });
  }

  // Check if the email already exists in the database
  const checkEmailQuery =
    "SELECT COUNT(*) as count FROM users WHERE identity = ?";

  db.query(checkEmailQuery, [institution_email], (error, results) => {
    if (error) {
      console.error("Error checking email:", error);
      return res.status(500).json({
        error: true,
        message: "Error checking email",
      });
    }

    const emailExists = results[0].count > 0;

    if (emailExists) {
      return res.status(409).json({
        error: true,
        message: "Email already exists",
      });
    }

    // If the email doesn't exist, proceed to insert the user

    // inserting the insttitution to user table
    db.query("INSERT INTO users (role, identity) VALUES( ?, ?)", [2, institution_email],
      (error, results) => {
        if (error) {
          console.error("Error inserting institution to users:", error);
          return res.status(500).json({
            error: true,
            message: "Error inserting institution",
          });
        }

        // inserting the institution to institution table
        const insertQuery =
          "INSERT INTO institution (institution_password, leader_position, institution_email, institution_name, institution_leader) VALUES (?, ?, ?, ?, ?)";

        db.query(
          insertQuery,
          [
            institution_password,
            leader_position,
            institution_email,
            institution_name,
            institution_leader,
          ],
          (error, results) => {
            if (error) {
              console.error("Error registering institution:", error);
              return res.status(500).json({
                error: true,
                message: "Error registering institution",
              });
            }

            console.log("Your institution registered successfully");
            return res.status(201).json({
              error: false,
              message: "Your institution registered successfully",
            });
          }
        );
      });
  });

});

  /**********************************to register the valid candidates****************** */

  /*this should be made by the institution in the */
app.post("/valid_candidate/register", (req, res) => {
    const {
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
      father_disability,
    } = req.body;

    if (
      !first_name ||
      !last_name ||
      !registration_number ||
      !study_at ||
      !email ||
      !ammmount_remained ||
      !phone_no ||
      !control_number
    ) {
      return res.status(400).json({
        error: true,
        message: "Please provide basic required information.",
      });
    }

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
      father_disability,
    };

    db.query(
      "INSERT INTO valid_candidates SET ?",
      dataToInsert,
      (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            error: true,
            message: "An error occurred while processing your request.",
          });
        }

        return res.status(201).json({
          error: false,
          data: results,
          message: "student uploaded successfully.",
        });
      }
    );
  });



  //**********************creating new compaigns ****************************/
  // api to create new compaign
app.post("/createCompaign", (req, res) => {
    const { compaign_story, dead_line, ammout_to_be_raised, student_id } =
      req.body;

    if (!compaign_story || !dead_line || !ammout_to_be_raised || !student_id) {
      return res.status(400).json({
        error: true,
        message: "Please provide all required information.",
      });
    }

    const dataToInsert = {
      ammout_to_be_raised,
      compaign_story,
      dead_line,
      created_at: new Date(), // Use the current date as the created_at value
      student_id,
    };

    db.query("INSERT INTO compaign SET ?", dataToInsert, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          error: true,
          message: "An error occurred while processing your request.",
        });
      }

      return res.status(201).json({
        error: false,
        message: "Campaign created successfully.",
      });
    });
  });
})
