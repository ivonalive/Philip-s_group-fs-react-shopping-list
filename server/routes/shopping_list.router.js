const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const sqlTable = `SELECT * FROM shopping_list ORDER BY name;`;
    pool.query(sqlTable)
        .then((result) => {
            console.log('Got shopping list back from database', result);
            res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error making data base query ${sqlTable}`, error);
        res.sendStatus(500);
    })
});



router.post('/', (req, res) => {
    const shoppingList = req.body;
    const sqlText = `INSERT INTO shopping_list (name, quantity, unit, purchased)
                     VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, [shoppingList.name, shoppingList.quantity, shoppingList.unit, shoppingList.purchased])
        .then((result) => {
            console.log(`Added shopping list to the database`, shoppingList);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
});




// router.delete('/:id', (req, res) => {
    
// })
module.exports = router;