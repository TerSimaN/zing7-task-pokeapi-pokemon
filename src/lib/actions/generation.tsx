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

    if (Array.isArray(filter)) {
        console.log("Filter as array:", filter);
        for (const filterObj of filter) {
            let generation = (await getGenerationByName(filterObj)) as PokeAPI.Game.Generation;
            generationPokemonSpeciesArray = generationPokemonSpeciesArray.concat(generation.pokemon_species);
        }
    } else if (filter !== '') {
        console.log("Filter as string:", filter);
        let generation = (await getGenerationByName(filter)) as PokeAPI.Game.Generation;
        generationPokemonSpeciesArray = generationPokemonSpeciesArray.concat(generation.pokemon_species);
    }

    return generationPokemonSpeciesArray;
}
