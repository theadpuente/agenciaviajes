const router = require('express').Router();
const { getClients, createClients, updateClientsbyId, deleteClientbyId, getClientsbyId } = require('../../models/client.model');


router.get('/', async (req, res) => {


    try {
        const [result] = await getClients();
        res.json(result);


    } catch (error) {

        res.json({ fatal: error.message });

    }


});


router.post('/', async (req, res) => {

    try {

        const [result] = await createClients(req.body);
        const [cliente] = await getClientsbyId(result.insertId);
        
        res.json(cliente[0]);

    } catch (error) {

        res.json({ fatal: error.message });
    }
})



router.put('/:clientId', async (req, res) => {

    const { clientId } = req.params;

    try {

        const [result] = await updateClientsbyId(clientId, req.body);

        const [cliente] = await getClientsbyId(clientId);

        res.json(cliente[0])

    } catch (error) {
        res.json({ fatal: error.message });
    }
})


router.delete('/:clientId', async (req, res) => {
    const { clientId } = req.params;

    try {

        const [result] = await deleteClientbyId(clientId);
      

        res.json({ message: 'Se ha borrado el cliente' });

    } catch (error) {
        res.json({ fatal: error.message });
    }
});



module.exports = router;