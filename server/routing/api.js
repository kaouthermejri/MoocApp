const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyparser = require('body-parser');

const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/MoocBD', (err, client) => {
        if (err) console.log(err);
        let db = client.db('MoocBD');
        closure(db);
    })
}

router.get('/cours', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    connection((db) => {
        db.collection('cours').find().toArray((err, result) => {
            res.send(result)
        })

    })
});

router.get('/cours/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    connection((db) => {
        db.collection('cours').findOne({
            "_id": ObjectID(req.params.id)
        }, (err, result) => {
            res.send(result);
        })
    })
})

router.post('/cours', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    connection((db) => {
        db.collection('cours').insertOne(req.body, (err, result) => {
            res.send(result);
        })
    })
})

module.exports = router;