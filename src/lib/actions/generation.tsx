import { poke_api_url } from "@/config/constants";
import { getPokemonSpeciesByName, getVarietiesMap } from "./pokemonSpecies";

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

export async function getGenPokemonSpecies(genId: string) {
    let generation = (await getGenerationById(genId)) as PokeAPI.Game.Generation;
    return generation.pokemon_species;
}

export async function getGenPokemonMap(filter: string | string[]) {
    const pokemonMap = new Map<string, PokeAPI.Utility.NamedAPIResource>();

    if (Array.isArray(filter)) {
        console.log("Filter as array:", filter);
        for (const filterObj of filter) {
            const genPokemonSpecies = (await getGenPokemonSpecies(filterObj)) as PokeAPI.Utility.NamedAPIResource[];
            for (const pokemonSpecies of genPokemonSpecies) {
                const varietiesMap = (await getVarietiesMap(pokemonSpecies.name)) as Map<string, PokeAPI.Utility.NamedAPIResource>;
                varietiesMap.forEach((value, key) => {
                    if (!pokemonMap.has(key)) {
                        pokemonMap.set(key, value);
                    }
                });
            }
        }
    } else if (filter != '') {
        console.log("Filter as string:", filter);
        const genPokemonSpecies = (await getGenPokemonSpecies(filter)) as PokeAPI.Utility.NamedAPIResource[];
        for (const pokemonSpecies of genPokemonSpecies) {
            const varietiesMap = (await getVarietiesMap(pokemonSpecies.name)) as Map<string, PokeAPI.Utility.NamedAPIResource>;
            varietiesMap.forEach((value, key) => {
                if (!pokemonMap.has(key)) {
                    pokemonMap.set(key, value);
                }
            });
        }
    }

    return pokemonMap;
}

export async function getGenPokemonSpeciesMap(filter: string | string[]) {
    const pokemonMap = new Map<string, PokeAPI.Utility.NamedAPIResource>();

    if (Array.isArray(filter)) {
        console.log("Filter as array:", filter);
        for (const filterObj of filter) {
            let generation = (await getGenerationById(filterObj)) as PokeAPI.Game.Generation;
            generation.pokemon_species.forEach((pokemonSpecies) => {
                if (!pokemonMap.has(pokemonSpecies.name)) {
                    pokemonMap.set(pokemonSpecies.name, pokemonSpecies);
                }
            });
        }
    } else if (filter !== '') {
        console.log("Filter as string:", filter);
        let generation = (await getGenerationById(filter)) as PokeAPI.Game.Generation;
        generation.pokemon_species.forEach((pokemonSpecies) => {
            if (!pokemonMap.has(pokemonSpecies.name)) {
                pokemonMap.set(pokemonSpecies.name, pokemonSpecies);
            }
        });
    }

    return pokemonMap;
}
