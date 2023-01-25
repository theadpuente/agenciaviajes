const { createHotel, getHotelsbyId, updateHotelsbyId, getHotels, deleteHotelsbyId } = require('../../models/hotels.models');

const router = require('express').Router();



router.get('/', async (req, res) => {


    try {
        const [result] = await getHotels();
        res.json(result);
    } catch (error) {

        res.json({ fatal: error.message });

    }

   
});


router.get('/:hotelId', async (req, res) => {


    try {
        const [result] = await getHotelsbyId();
        res.json(result);
    } catch (error) {

        res.json({ fatal: error.message });

    }

   
});


router.post('/', async (req, res) => {

    try {

        const [result] = await createHotel(req.body);
        const [hotel] = await getHotelsbyId(result.insertId);
        
        res.json(hotel[0]);

    } catch (error) {

        res.json({ fatal: error.message });
    }
})



router.put('/:hotelId', async (req, res) => {

    const { hotelId } = req.params;

    try {

        const [result] = await updateHotelsbyId(hotelId, req.body);

        const [hotel] = await getHotelsbyId(hotelId);

        res.json(hotel[0])

    } catch (error) {
        res.json({ fatal: error.message });
    }
})


router.delete('/:hotelId', async (req, res) => {
    const { hotelId } = req.params;

    try {

        const [result] = await deleteHotelsbyId(hotelId);
      

        res.json({ message: 'Se ha borrado el cliente' });

    } catch (error) {
        res.json({ fatal: error.message });
    }
});





module.exports = router;