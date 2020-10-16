const { Client, logger } = require('camunda-external-task-client-js');

// chose one option, you don't need both
// const {workers} = require('./workers') // use this if you want to split the workers into different files
const {workers} = require('./workers.js') // use this if you have all the workers in the same file

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
//  - 'asyncResponseTimeout': long polling timeout (then a new request will be issued)
const config = { 
	baseUrl: 'http://localhost:8080/engine-rest', 
	use: logger, 
	asyncResponseTimeout: 10000
}

// create a Client instance with custom configuration
const client = new Client(config);

for (var wid in workers) {
	console.log(`Registering client for task ${wid}`)
	client.subscribe(wid, workers[wid])
}
