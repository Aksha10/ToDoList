const ctrl = require('./../controller/controllerToDo.js');
const router = require('express').Router();


router.get('/', ctrl.getData)
router.post('/addNewTask',ctrl.addnewtask)
router.delete('/delete', ctrl.deleteTask)

module.exports = router