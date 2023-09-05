const express = require('express');
const app = express();
const authRouter = require('./router/authRouter')
const dbconnect = require('./config/dbConfig')
const cookieParser = require('cookie-parser');
dbconnect();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRouter);
app.use('/', (req,res) => {
res.status(200).json({
    data: 'JWT-AUTH SERVER - updated'
})

})
module.exports = app;