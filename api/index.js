const express = require ('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express ();
const port = 5000;

app.use(bodyParser.json());

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

