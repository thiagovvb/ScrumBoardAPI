const express = require('express');
const boardController = require('../controllers/boardController')

const router = express.Router();

router.post('/board', boardController.postBoard)
router.get('/board', boardController.getBoard)
router.post('/add-category', boardController.postCategory)

module.exports = router