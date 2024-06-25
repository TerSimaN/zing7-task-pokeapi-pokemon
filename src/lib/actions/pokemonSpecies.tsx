import { poke_api_url } from "@/config/constants";

export async function getPokemonSpeciesList() {
    let response = await fetch(`${poke_api_url}/pokemon-species`);
    let data = (await response.json()) as PokeAPI.Utility.NamedAPIResourceList;
    return data;
}

export async function getPokemonSpeciesByName(name: string) {
    let response = await fetch(`${poke_api_url}/pokemon-species/${name}`);
    let data = (await response.json()) as PokeAPI.PokemonSpecies.PokemonSpecies;
    return data;
}

export async function getPokemonSpeciesById(id: string) {
    let response = await fetch(`${poke_api_url}/pokemon-species/${id}`);
    let data = (await response.json()) as PokeAPI.PokemonSpecies.PokemonSpecies;
    return data;
}

export async function getVarietiesMap(pokemonSpeciesName: string) {
    const pokemonMap = new Map<string, PokeAPI.Utility.NamedAPIResource>();

    let pokemonSpecies = (await getPokemonSpeciesByName(pokemonSpeciesName)) as PokeAPI.PokemonSpecies.PokemonSpecies;
    pokemonSpecies.varieties.forEach((variety) => {
        if (!pokemonMap.has(variety.pokemon.name)) {
            pokemonMap.set(variety.pokemon.name, variety.pokemon);
        }
    });

    return pokemonMap;
}