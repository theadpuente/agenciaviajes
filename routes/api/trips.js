const { getTripsbyId, getTrips, createTrip, updateTripbyId, deleteTripbyId } = require('../../models/trip.model');

const router = require('express').Router();


router.get('/', async (req, res) => {


    try {
        const [result] = await getTrips();
        res.json(result);
    } catch (error) {

        res.json({ fatal: error.message });

    }

   
});


router.get('/:tripId', async (req, res) => {


    try {
        const [result] = await getTripsbyId();
        res.json(result);
    } catch (error) {

        res.json({ fatal: error.message });

    }

   
});


router.post('/', async (req, res) => {

    try {

        const [result] = await createTrip(req.body);
        const [trip] = await getTripsbyId(result.insertId);
        
        res.json(trip[0]);

    } catch (error) {

        res.json({ fatal: error.message });
    }
})



router.put('/:tripId', async (req, res) => {

    const { tripId } = req.params;

    try {

        const [result] = await updateTripbyId(tripId, req.body);

        const [trip] = await getTripsbyId(tripId);

        res.json(trip[0])

    } catch (error) {
        res.json({ fatal: error.message });
    }
})


router.delete('/:tripId', async (req, res) => {
    const { tripId } = req.params;

    try {

        const [result] = await deleteTripbyId(tripId);
      

        res.json({ message: 'Se ha borrado el cliente' });

    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;