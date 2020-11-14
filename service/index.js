// GET /data 
// GET /data/1
// POST /data 
// PUT /data/1 
// DELETE /data/1 

const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require("body-parser");

const Users = require('./model/users')

const options = {
    user: 'kainunka',
    pass: 'yukimuraseichi'
};
const version = "v1"
const port = process.env.PORT || 5000;

mongoose.connect(`mongodb+srv://${options.user}:${options.pass}@cluster0.iwbh3.mongodb.net/sampeng?retryWrites=true&w=majority`)

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get("/api/"+version+"/users", (req, res) => {
    if (!req.body) return res.sendStatus(400);

    Users.find({}, (err, results) => {
        if (err) return res.json({ status: false, message: "cannot get all users", code: err });

        if (results) {
            res.json({ status: true, message:"Successfully get product.", data: results })
        }
    })
})

app.get("/api/"+version+"/users/:id", (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const { id } = req.params

    Users.find({userID: id}, (err, results) => {
        if (err) return res.json({ status: false, message: "cannot get users by id", code: err })
        if (results && Object.keys(results).length > 0) {
            res.json({ status: true, message:"Successfully get users.", data: results[0] })
        } else {
            res.json({ status: false, message: "cannot get users by id" })
        }
    })
})

app.delete("/api/"+version+"/users/:id", (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const { id } = req.params

    Users.findByIdAndDelete(id, (err, results) => {
        if (err) return res.json({ status: false, message: "cannot remove users", code: err })
        if (results) {
            res.json({ status: true, message: "Successfully remove users" })
            res.status(204).end()
        }
    })
})

app.put("/api/"+version+"/users/:id", (req, res) => {
    const payload = req.body
    const { id } = req.params

    Users.findByIdAndUpdate(id, { $set: payload }, (err, results) => {
        if (err) {
            res.json({ status: false, message: "cannot update users", code: err })
        } else {
            res.json({ status: true, message: "Successfully update users" })
        }
    })
})

app.post("/api/"+version+"/users", (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const users = new Users(req.body)
    users.save(req.body, (err, doc) => {
        if (err) return res.json({ status: false, message: "cannot add users", code: err });
        res.json({ status: true, message:"Successfully add users.", data: { id: doc._id } })
    })
})

app.listen(port, () => {
    console.log("application is listening on:", port);
 })

 module.exports = app;