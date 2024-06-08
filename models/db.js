const mysql = require("mysql");
const dbConnection = () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Password@2001',
        database: 'brainiacs'
    });
    connection.connect((error) => {
        if (error) {
            console.log(error)
            throw error
        } else {
            console.log("database connected!")
        }
    })
    return connection;
}
module.exports = {
    dbConnection
}