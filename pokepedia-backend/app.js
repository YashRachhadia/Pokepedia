require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/", indexRouter);

// const pokemonUtility = require("./pokemonUtility");
// pokemonUtility.postPokemonData();

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started !");
});

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Successfull !"))
  .catch((error) => console.log(error));
