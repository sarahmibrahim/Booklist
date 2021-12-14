const express = require('express')
const router = express.Router();
const books = require('./BookController')

router.put('/book/:id',books.update)
router.delete('/book/:id',books.delete)

router.get('/book', books.index)
router.post('/book/create', books.create)
router.get('/book/:id', books.show)


module.exports = router;
