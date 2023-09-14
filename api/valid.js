const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const crypto = require("crypto");
const secretKey = crypto.randomBytes(32).toString("hex");

const app = express();
const port = 5000;

app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
  })
);

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
  bodyParser.urlencoded({
    extended: true,
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "elimufund",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to Mysql database");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/valid_candidate/register", (req, res) => {
  const {
    first_name,
    last_name,
    registration_number,
    email,
    phone_no,
    parents,
    candidates_disability,
    mother_disability,
    father_disability,
    registration_date,
    hasSponsorship, // Receive the value of hasSponsorship as have_sponsorship
  } = req.body;

  // Set default values for unhandled fields
  const study_at = 2; // Set the default value for study_at here
  const control_number = 15262616; // Set the default value for control_number here

  // Check for missing or empty required fields
  const requiredFields = [
    "first_name",
    "last_name",
    "registration_number",
    "email",
    "parents",
    "candidates_disability",
    "mother_disability",
    "father_disability",
    "registration_date",
  ];

  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      error: true,
      message: `Please provide the following required fields: ${missingFields.join(", ")}.`,
    });
  }

  const dataToInsert = {
    first_name,
    last_name,
    registration_number,
    study_at,
    email,
    phone_no,
    control_number,
    parents,
    have_sponsorship: hasSponsorship,
    candidates_disability,
    mother_disability,
    father_disability,
    registration_date,
  };

  db.query("INSERT INTO valid_candidates SET ?", dataToInsert, (err, results) => {
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
      message: "Student uploaded successfully.",
    });
  });
});
