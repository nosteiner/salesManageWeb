const express = require('express')
const compenyDA = require('../Data-Access/CompenyDA')
const router = express.Router()




// Get all compenies
router.get('/', (req, res) => {
    compenyDA.getAll().then((data) => {
        res.send(JSON.stringify(data));
    }).catch((error) => {
        res.send("error:" + error)
    });
});

// save new compeny 
router.post('/newCompeny', (req, res) => {
    newCompeny = req.body
    console.log(newCustomer)
    compenyDA.createNew(newCompeny).then(data => {
        res.send("saved");
    }).catch((error) => {
        res.send("error:" + error)
    });
});

//update exist compeny with specific id 
router.put('/editCompeny/:id', (req, res) => {
    compenyDA.edit(req.body, req.params.id).then(() => {
        res.send("changes saved on row id:" + req.params.id);
    }).catch((error) => {
        res.send("error:" + error)
    });
});


//delete compeny by id 
router.delete('/deleteCompeny/:id', (req, res) => {
    compenyDA.remove(req.params.id).then(() => {
        res.send("row id:" + req.params.id + " removed from db");
    }).catch((error) => {
        res.send("error:" + error)
    });
});

module.exports = router
