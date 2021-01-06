const mongoose = require('mongoose');
let count = 0;

const options = {
    dbName: 'reuseideas',
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    // all other approaches are now deprecated by MongoDB:
    useNewUrlParser: true,
    useUnifiedTopology: true

};
const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
    mongoose.connect("mongodb://reuseideas:bE3w9RvZAP40YQHU396BmGC0M4A1iIheiNfh0Gizfp0zcTegLsANsZPpXOc3z1AEDRSq11EIq5mox4SkEsHiCQ==@reuseideas.mongo.cosmos.azure.com:10255/?ssl=true&appName=@reuseideas@", options).then(() => {
        console.log('MongoDB is connected')
    }).catch(err => {
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry();

exports.mongoose = mongoose;
