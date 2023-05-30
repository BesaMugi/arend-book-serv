const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/genre.route"));
app.use(require("./routes/book.route"));
app.use(require("./routes/user.route"));
app.use(require("./routes/review.route"));

(async () => {
    try {
        mongoose.connect("mongodb+srv://besausk:token95@cluster0.lm3pfxi.mongodb.net/besa")
        console.log('Mongo connected')
    }
    catch(error){
        console.log(error)
    }
})()

app.listen(3000, () => {
    console.log('Сервер запущен успешно')
});