const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  pokemonID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  details: {
    type: Object,
  },
});

module.exports = mongoose.model("PokemonsData", PokemonSchema);
