const axios = require("axios");
const PokemonSchema = require("./models/PokemonSchema");

// https://pokeapi.co/api/v2/pokemon
const fetchPokemonData = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=280&limit=20"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const fetchPokemonDetails = async (name) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const setDetailsInResults = async () => {
  const data = await fetchPokemonData();
  const results = data.data.results;
  await Promise.all(
    results.map(async (result) => {
      const pokedetail = await fetchPokemonDetails(result.name);
      const id = result.url.split("/")[result.url.split("/").length - 2];
      result.pokemonID = id;
      result.details = pokedetail.data;
    })
  );
  return results;
};

const postPokemonData = async () => {
  const results = await setDetailsInResults();
  console.log(results);
  let dataToInsert = [];
  for (let result of results) {
    const pokemonSchema = new PokemonSchema({
      pokemonID: result.pokemonID,
      name: result.name,
      url: result.url,
      details: {
        abilities: result.details.abilities,
        stats: result.details.stats,
        sprites: result.details.sprites.front_shiny,
        types: result.details.types,
      },
    });
    dataToInsert.push(pokemonSchema);
  }
  const dataPosted = await PokemonSchema.insertMany(dataToInsert);
  console.log("Inserted", dataPosted);
};

module.exports.postPokemonData = postPokemonData;
