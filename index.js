const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password@2001',
    database: 'brainiacs'
});

app.get('/', (req, res) => {
    res.send({
        message: "Hello world",
    });
});

app.get('/citizens', (req, res) => {
    connection.query('SELECT * from citizens', function (error, results, fields) {
        if (error) throw error;
        res.send({
            citizens: results
        })
    });
});

/* 

Homework add these endpoints

- GET    /citizens/:id - get a single citizen by id===done
- POST   /citizens - create a new citizen  ====done

- PUT    /citizens/:id - update a citizen==done
- DELETE /citizens/:id - delete a citizen
- PATCH  ???

*/
//get single citizen by id
app.get('/citizens/:id', (req, res) => {
    let id = req.params.id;
    connection.query(`SELECT * from citizens where id=${id}`, function (error, results, fields) {
        if (error) throw error;
        res.send({
            citizen: results
        })
    });
});
//update a citizen
app.put('/citizens/:id', (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let data_of_birth = req.body.date_of_birth;
    connection.query(`UPDATE citizens SET name='${name}',date_of_birth='${data_of_birth}' WHERE id=${id}`, function (error, results, fields) {
        if (error) throw error;
        res.send({
            message: "Citizen updated successfully"
        })

    });
})
//delete a citizen by id
app.delete('/citizens/:id', (req, res) => {
    let id = req.params.id;
    connection.query(`DELETE FROM citizens WHERE id=${id}`, function (error, results, fields) {
        if (error) throw error;
        res.send({
            message: "Citizen deleted successfully"
        })
    });
});
//insert a new citizen
app.post('/citizens', (req, res) => {
    let name = req.body.name;
    let data_of_birth = req.body.date_of_birth;
    let gender = req.body.gender
    let status = req.body.status
    connection.query(`INSERT INTO citizens (name,date_of_birth,gender,status) VALUES ('${name}','${data_of_birth}','${gender}','${status}')`, function (error, results, fields) {
        if (error) throw error;
        res.send({
            message: "Citizen added successfully"
        })
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    connection.connect();
    console.log("Db connected 😁")
});