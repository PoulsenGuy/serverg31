const express = require('express')
const router = express.Router()


const {
    createContact,
    getContact,
    findContact,
    getAllContacts,
} = require('../controllers/contatcs.controllers')

router.use(express.json())

  
//metodo Get
router.get('/', getAllContacts)

//Metodo Get Parameters
router.get('/:id', getContact)

//Metodo get query
router.get('/search',findContact)
//Metodo post
router.post('/', createContact)

module.exports = router;