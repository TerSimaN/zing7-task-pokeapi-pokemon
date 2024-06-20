import { poke_api_url } from "@/config/constants";

export async function getGenerationList() {
    let response = await fetch(`${poke_api_url}/generation`);
    let data = (await response.json()) as PokeAPI.Utility.NamedAPIResourceList;
    return data;
}

export async function getGenerationByName(name: string) {
    let response = await fetch(`${poke_api_url}/generation/${name}`);
    let data = (await response.json()) as PokeAPI.Game.Generation;
    return data;
}

export async function getGenerationById(id: string) {
    let response = await fetch(`${poke_api_url}/generation/${id}`);
    let data = (await response.json()) as PokeAPI.Game.Generation;
    return data;
}

export async function getGenerationPokemonSpeciesArray(filter: string | string[]) {
    let generationPokemonSpeciesArray: PokeAPI.Utility.NamedAPIResource[] = [];
    let generation: PokeAPI.Game.Generation = {
        id: 0,
        name: "",
        abilities: [],
        names: [],
        main_region: {
            name: "",
            url: ""
        },
        moves: [],
        pokemon_species: [],
        types: [],
        version_groups: []
    };

    if (Array.isArray(filter)) {
        console.log("Filter as array:", filter);
        for (const filterObj of filter) {
            generation = (await getGenerationByName(filterObj)) as PokeAPI.Game.Generation;
            for (const pokemonSpecies of generation.pokemon_species) {
                if (!generationPokemonSpeciesArray.includes(pokemonSpecies)) {
                    generationPokemonSpeciesArray.push(pokemonSpecies);
                }
            }
        }
    } else if (filter !== '') {
        console.log("Filter as string:", filter);
        generation = (await getGenerationByName(filter)) as PokeAPI.Game.Generation;
        for (const pokemonSpecies of generation.pokemon_species) {
            if (!generationPokemonSpeciesArray.includes(pokemonSpecies)) {
                generationPokemonSpeciesArray.push(pokemonSpecies);
            }
        }
    }

    return generationPokemonSpeciesArray;
}
