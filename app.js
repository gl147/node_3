const express = require('express')
const router = require('./routes/router')
const authRouter = require('./routes/auth')
const routerRouter = require('./routes/router')
const userRouter = require('./routes/user')


const app = express();

app.use('/auth', authRouter);
app.use('/router', routerRouter);
app.use('/user', userRouter)

app.listen(3000)

app.use(router);
