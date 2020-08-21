const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    let totalFeedback = req.body;
    console.log('posting', totalFeedback);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding","support", "comments")
                    VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [totalFeedback.feeling, totalFeedback.understanding, totalFeedback.support, totalFeedback.comments])
        .then(result => {
            res.sendStatus(201)
        }).catch(error => {
            console.log('Error adding feedback', error);
            res.sendStatus(500);
        });
}); 

module.exports = router;