const {
    dbConnection
} = require("../models/db")
const connection = dbConnection()
exports.getAllCitizens = async (req, res) => {
    connection.query('SELECT * from citizens', function (error, results, fields) {
        if (error) throw error;
        res.send({
            citizens: results
        })
    });
}
exports.getSingleCitizen = async (req, res) => {
    let id = req.params.id;
    connection.query(`SELECT * from citizens where id=${id}`, function (error, results, fields) {
        if (error) throw error;
        res.send({
            citizen: results
        })
    });
}
exports.updateCitizen = async (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let data_of_birth = req.body.date_of_birth;
    connection.query(`UPDATE citizens SET name='${name}',date_of_birth='${data_of_birth}' WHERE id=${id}`, function (error, results, fields) {
        if (error) throw error;
        res.send({
            message: "Citizen updated successfully"
        })

    });
}
exports.createCitizen = async (req, res) => {
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
}
exports.deleteCitizens = async (req, res) => {
    let id = req.params.id;
    connection.query(`DELETE FROM citizens WHERE id=${id}`, function (error, results, fields) {
        if (error) throw error;
        res.send({
            message: "Citizen deleted successfully"
        })
    });
}