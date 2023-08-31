const express = require ('express');
const mysql = require('mysql');

const app = express ();
const port = 5000;

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

