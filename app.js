const express = require('express')
const app = express()
const config = require('./config/config');
const mongoose = require('mongoose')
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const movieRoute = require("./routes/movies")
const categoryRoute = require("./routes/categories")

app.use(express.json())

mongoose
    .connect(config.monggose.url, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/blog/posts", postRoute);
app.use("/api/blog/categories", categoryRoute);
app.use("/api/movie", movieRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log("Backend is running.");
});