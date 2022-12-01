const express = require('express');
const fs = require('fs');
const Datastore = require('nedb');
const app = express();
const port = 3000


app.listen(port, () => console.log("listening on port " + port));
app.use(express.static("public"));

const database = new Datastore("database.db");
database.loadDatabase();


app.use(express.json({limit: "1mb"}));
app.post('/api', (req, res) => {
    const data = req.body
    data.timestamp = Date.now();
    database.insert(data);
    res.json({  
        status: "Success",
        data: req.body,
        tim: data.timestamp
     });
});
app.get("/api", (req, res) => {
    database.find({},(err, data) => {
        if (err) {
            res.end();
            return;
        }
        res.json({data});
    });
});