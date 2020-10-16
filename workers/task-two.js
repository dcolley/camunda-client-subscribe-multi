
const taskTwoWorker = async function({ task, taskService }) {
    // Put your business logic here
    // Get a process variable
    // const amount = task.variables.get('amount');
    // const item = task.variables.get('item');
    console.log(`Task two running...`);
    // Complete the task
    await taskService.complete(task);
}

module.exports = {taskTwoWorker}
