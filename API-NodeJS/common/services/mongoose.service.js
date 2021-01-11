/** This is mainly used for creating connection with Azure Cosmos DB */

const mongoose = require('mongoose');

const options = {
    dbName: 'reuseideas',
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    // all other approaches are now deprecated by MongoDB:
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: false

};
const connectWithRetry = () => {
    mongoose.connect("mongodb://reuseideas:bE3w9RvZAP40YQHU396BmGC0M4A1iIheiNfh0Gizfp0zcTegLsANsZPpXOc3z1AEDRSq11EIq5mox4SkEsHiCQ==@reuseideas.mongo.cosmos.azure.com:10255/?ssl=true&appName=@reuseideas@", options).then(() => {
        console.log('MongoDB is connected')
    });
};

connectWithRetry();

exports.mongoose = mongoose;
