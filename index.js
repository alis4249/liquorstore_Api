const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const userRouter = require('./routes/users');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const auth = require('./auth');
const cors = require('cors');
const bannerImages = require('./routes/bannerImages');
const itemsRouter = require('./routes/items');
const WineRoute = require('./routes/Wines');
const BeerRoute = require('./routes/Beers');
const drinkRoute = require('./routes/HardDrinks');
const cartRoute = require('./routes/carts');
const router = express.Router();


const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.options('*', cors());
app.use(express.urlencoded({extended: true }));

app.use(express.static('public'));

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then((db) => {
        console.log("Successfully connected to MongodB server");
    }, (err) => console.log(err));

app.use('/users', userRouter);
app.use('/upload', uploadRouter);
app.use('/item',itemsRouter);
app.use('/Wine',WineRoute);
app.use('/Beer',BeerRoute);
app.use('/cartL',cartRoute);
app.use('/harddrink',drinkRoute);
app.use('/banner',bannerImages);

app.use(auth.verifyUser);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ status: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});
