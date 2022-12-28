const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/pokeBags')

//add routes
//Index /api/pokeBags
router.get('/', dataController.index, apiController.index)
//Delete /api/pokeBags/:id
router.delete('/:id', dataController.destroy, apiController.show)
//Update /api/pokeBags/:id
router.put('/:id', dataController.update, apiController.show)
//Create /api/pokeBags
router.post('/', dataController.create, apiController.show)
//Show /api/pokeBags/:id
router.get('/:id', dataController.show, apiController.show)

module.exports = router 