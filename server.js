const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api");
const viewRoutes = require("./routes/views");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(apiRoutes);
app.use(viewRoutes);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true }, { useUnifiedTopology: true },
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
},
);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});