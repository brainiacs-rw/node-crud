const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Murenzi2001@',
    database: 'nida'
});

app.get('/', (req, res) => {
    res.send({
        message: "Hello world",
    });
});

app.get('/citizens', (req, res) => {
    connection.query('SELECT * from citizens', function (error, results, fields) {
        if (error) throw error;
        res.send({ citizens: results })
    });
});

/* 

Homework add these endpoints

- GET    /citizens/:id - get a single citizen by id
- POST   /citizens - create a new citizen
- PUT    /citizens/:id - update a citizen
- DELETE /citizens/:id - delete a citizen
- PATCH  ???

*/

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    connection.connect();
    console.log("Db connected 😁")
});