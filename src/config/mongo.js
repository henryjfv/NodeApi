// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "";
// const client = new MongoClient(uri, { });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.set('strictQuery', true);
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (error, res) => {
        if (error) { console.log('**** ERROR AL CONECTARSE ****'); return; }
        if (res) { console.log('**** CONEXION CORRECTA ****'); return; }
    });
}

module.exports = dbConnect;