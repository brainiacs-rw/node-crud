const express = require('express');
const mysql = require('mysql');
const { citizensRouter } = require('./routes/citizens.routes');

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.send({
        message: "Hello world",
    });
});
app.use("/citizens",citizensRouter)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});