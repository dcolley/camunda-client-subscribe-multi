
const chargeCardWorker = async function({ task, taskService }) {
    // Put your business logic here
    // Get a process variable
    const amount = task.variables.get('amount');
    const item = task.variables.get('item');
    console.log(`Charging credit card with an amount of ${amount}€ for the item '${item}'...`);
    // Complete the task
    await taskService.complete(task);
}

module.exports = {chargeCardWorker}
