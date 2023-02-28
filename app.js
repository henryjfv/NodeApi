require('dotenv').config()
const PORT = process.env.PORT || 3000;

const express = require('express')
const cors = require('cors')
const dbConnect = require('./src/config/mongo')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("./src/storage"));

app.use('/api', require("./src/routes"));


app.listen(PORT, () => { console.log(`Server running in ${PORT}`); })

dbConnect();

// app.get('/', function (req, res) {
//     res.send('Hello World from node for doctus')
// })
