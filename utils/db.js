const mongodb = require('mongodb')


class DBClient{
	constructor(){
		let host = 'localhost'
		let port = '27017'
		let database = 'files_manager'
		if (process.env.DB_HOST) host = process.env.DB_HOST
		if (process.env.DB_PORT) port = process.env.DB_PORT
		if (process.env.DB_DATABASE) port = process.env.DB_DATABASE

		const url = `mongodb://${host}:${port}/${database}`;
		this.client = new mongodb.MongoClient(url)
		this.client.connect()
	}

	isAlive(){
		return this.client.isConnected();
	}

	async nbUsers(){
		return this.client.db().collection('users').countDocuments();
	}

	async nbFiles(){
		return this.client.db().collection('files').countDocuments();
	}
}


const dbClient = new DBClient()
module.exports = dbClient
