const router = require('express').Router();





router.get('/', async (req, res) => {


    try {
        const result = await db.query('select * from hoteles');
        res.json(result[0]);
    } catch (error) {

        res.json({ fatal: error.message });

    }

    //res.send('recoje todos los userss')
});


module.exports = router;