require('dotenv').config()

const express = require('express')
const cors = require('cors')
const dbConnect = require('./src/config/mongo')

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/api', require("./src/routes"));

// app.get('/', function (req, res) {
//     res.send('Hello World from node for doctus')
// })

app.listen(PORT, () => { console.log(`Server running in ${PORT}`); })

// dbConnect();