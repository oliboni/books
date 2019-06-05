const express = require('express')
const router = express.Router()
const models = require('../models')
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

//Create
router.post('/', function (req, res) {
    models.Book.create(req.body).then(
        book => res.status(200).send(book)
    ).catch(err => res.status(500).send(err))
})

//Get all
router.get('/', function(req, res) {
    models.Book.findAll(
        {include: 
            {model: models.Author}
        }).then(
        books => res.status(200).send(books)
        )
})

//Find one by id
router.get('/:id', function(req, res) {
    models.Book.findByPk(req.params.id, {include: 
        {model: models.Author}
    })
    .then(book => {
        if (!book) {
            res.status(404).send("NOT FOUND")
        } 

        res.status(200).send(book)
    }).catch(err => res.status(500).send(err))
})

//Update
router.put('/:id', function(req, res) {
    models.Book.findByPk(req.params.id).then(book => {
        if (!book) {
            res.status(404).send("NOT FOUND")
        } 

        book.update(req.body)
        res.status(200).send(book)
    })

})

//Delete
router.delete('/:id', function(req, res){
    models.Book.destroy({
        where: {id: req.params.id}
    }).then(book => {
        res.status(200).send('Excluído com sucesso')
    })
})

module.exports = router