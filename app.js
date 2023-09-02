const express = require('express');
const app = express();
const authRouter = require('./router/authRouter')

app.use(express.json());
app.use('/api/auth',authRouter);

app.use('/', (req,res) => {
res.status(200).json({
    data: 'JWT-AUTH SERVER - updated'
})

})
module.exports = app;