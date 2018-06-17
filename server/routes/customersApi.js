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


router.get('/:id', (req, res) => {
    var customer = customerDA.getOneById(req.params.id).then((data)=>{
        console.log(JSON.stringify(data))
        res.send(JSON.stringify(data));
    }).catch((error) => {
        res.send("error:" + error)
    });
  });

// save new customer 
router.post('/', (req, res) => {
    newCustomer = req.body.customer
    console.log(newCustomer)
    customerDA.createNew(newCustomer).then(()=> {
        res.send(JSON.stringify(newCustomer));
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
    customerDA.remove(req.params.id)
    res.status(200).send({});
});

module.exports = router
