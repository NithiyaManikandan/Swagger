var { Task } = require('../model/task')

const postTaskDetail = async (req, res) => {
    var task = new Task({
        storeGroup: req.body.storeGroup,
        startDate: req.body.storeGroup,
        endDate: req.body.storeGroup,
        state: req.body.storeGroup,
        region: req.body.storeGroup,
        area: req.body.storeGroup,
        stores: req.body.storeGroup,
        taskName: req.body.storeGroup,
        taskDescription: req.body.storeGroup
    });
    task.save((err, doc) => {
        if (!err) {
            res.status(200).json({ message: 'task data stored successfully', doc })
        }
        else {
            res.status(400).json({ message: 'error in storing task data', doc })
        }
    })

}

module.exports = {postTaskDetail}