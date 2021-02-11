const express = require("express");
const router = express.Router();
const PokemonSchema = require("../models/PokemonSchema");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/pokemons", async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 20;
  const offset = req.query.offset ? parseInt(req.query.offset) : 0;
  const data = await PokemonSchema.find({})
    .skip(offset)
    .limit(limit)
    .exec((error, result) => {
      error ? res.status(500).send(error) : res.status(200).send(result);
    });
});

router.get("/pokemon/:name", async (req, res) => {
  const search = req.params.name;
  const data = await PokemonSchema.find({ name: search }, (error, result) => {
    error ? res.status(404).send(error) : res.status(200).send(result);
  });
});

module.exports = router;
