const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Ads = require('./models/Ads');
const PORT = process.env.PORT || 7000
const MONGO_DB_USER = "root"
const MONGO_DB_PASSWORD = "admin"
const MONGO_DB_DB = "olx"


app.use(express.json());

mongoose.connect(`mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@cluster0.cnyo8.mongodb.net/${MONGO_DB_DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("DataBase Connected")
}).catch((err) => {
    console.log(err)
});


const authRoutes = require("./routes/user")
const adsRoutes=require('./routes/Ads')

app.use('/api', authRoutes)
app.use('/api',adsRoutes)

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "hello from the server"
    })
})

app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
})