const { connect, connection } = require('mongoose');

//If connect using .env (dotenv) or to local
const connectionString = process.env.MONGODB || 'mongodb://127.0.0.1:27017/socialDB';

connect(connectionString);

module.exports = connection;