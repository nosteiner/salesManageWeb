const express = require('express')
const customerDA = require('../Data-Access/CustomerDA')
const router = express.Router()



// Get all customers
router.get('/', (req, res) => {
    customerDA.getAll().then((data) => {
        res.send(JSON.stringify(data));
    }).catch((error) => {
        res.send("error:" + error)
    });
});

// save new customer 
router.post('/newCustomer', (req, res) => {
    newCustomer = req.body
    console.log(newCustomer)
    customerDA.createNew(newCustomer).then(data => {
        res.send("saved");
    }).catch((error) => {
        res.send("error:" + error)
    });
});

//update exist customer  with specific id 
router.put('/editCustomer/:id', (req, res) => {
    customerDA.edit(req.body, req.params.id).then(() => {
        res.send("changes saved on row id:" + req.params.id);
    }).catch((error) => {
        res.send("error:" + error)
    });
});


//delete customer by id 
router.delete('/deleteCustomer/:id', (req, res) => {
    customerDA.remove(req.params.id).then(() => {
        res.send("row id:" + req.params.id + " removed from db");
    }).catch((error) => {
        res.send("error:" + error)
    });
});

module.exports = router
