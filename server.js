const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const api = require('./server/routing/api');
// const auth = require('./server/routing/auth');


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use('/api',api);
// app.use('/auth',auth);


// opening the express listener on port 3000
console.log('hani nasma3 fik 3al 3000')
app.listen(3000);