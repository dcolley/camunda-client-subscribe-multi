
const {chargeCardWorker} = require('./charge-card')
const {taskTwoWorker} = require('./task-two')

var workers = {
    "charge-card": chargeCardWorker, 
    "task-two": taskTwoWorker, 
}

module.exports = { workers }
