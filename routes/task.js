var express = require('express');
var router = express.Router();
// const e = require('../modules/error_handler.js');
const utils = require('../modules/utils.js');
const Task = require('../classes/Task.js');

router.post('/', async function(req, res, next) {
    const body = req.body;
    console.log(body);

    if (!body.title) {
        return utils.send_response(res, {
            status: 404,
            message: 'Task title is missing',
        });
    }

    let task = new Task(body);
    try {
        await task.createTask(body);
        return utils.send_response(res, {
            status: 200,
            message: 'Task Created Successfully',
        });
    } catch (error) {
        return utils.send_response(res, {
            status: 400,
            message: error.message,
        });
    }
});

router.put('/', async function(req, res, next) { 
    
    try{
        const body = req.body;
        console.log(body);
        let task = new Task(body);
    if(typeof(body?.isCompleted) != undefined) {
       await task.updateTaskStatus(body);
    }
    return utils.send_response(res, {
        status: 200,
        message: 'Updated Successfully',
    });
} catch(error) {
    return utils.send_response(res, {
        status: 400,
        message: error.message,
    });
}

});

router.get('/fetch-all', async function(req, res, next) {
    try {
        const tasks = await new Task({}).fetchAllTasks();
        return utils.send_response(res, {
            status: 200,
            message: 'Tasks fetched successfully',
            data: tasks
        });
    } catch (error) {
        return utils.send_response(res, {
            status: 400,
            message: error.message,
        });
    }
});

router.delete('/:id', async function(req, res, next) {
    try {
        let params = req.params;
        console.log(params.id);
        let task = new Task(params.id);

        await task.deleteTask(params.id);
        return utils.send_response(res, {
            status: 200,
            message: 'Deleted successfully',
        });
    } catch (error) {
        return utils.send_response(res, {
            status: 400,
            message: error,
        });
    }
});

module.exports = router;
