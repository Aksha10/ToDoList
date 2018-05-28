const ctrl = require('./../controller/controllerToDo.js'); //Accessing controllerToDo file which created in controller directory
const router = require('express').Router(); //Accessing router() in express module

router.get('/', ctrl.getData) //path for the get() function [getData()]
router.post('/addNewTask',ctrl.addnewtask)  //path for the post() function [addnewTask()]
router.delete('/delete', ctrl.deleteTask) //path for the delete() function [deleteTask()]
router.put('/markall', ctrl.markall)
router.put('/unmarkall', ctrl.unmarkall)
router.put('/mark', ctrl.mark)
router.delete('/clrtask', ctrl.clrtask)
router.get('/activetask', ctrl.activetask)
router.get('/completetask', ctrl.completeTask)
router.put('/inputtask/:id', ctrl.inputTask)

module.exports = router //Exporting module