const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from feedback ORDER BY id;')
        .then((result) => {
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

router.put('/:id', (req, res) => {
    const id = req.params.id;

    console.log('in put updateFlag', id);
    let sqlText = `UPDATE feedback SET flagged = NOT flagged WHERE id = $1;`

    pool.query(sqlText, [id])
        .then(result => {
            console.log(result);
            res.sendStatus(201);
        }).catch(error => {
            console.log('error in put', error);
            res.sendStatus(500);
        });
});


module.exports = router;