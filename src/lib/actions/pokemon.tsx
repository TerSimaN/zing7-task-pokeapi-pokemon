import { poke_api_url } from "@/config/constants";

export async function getPokemonList(offset: number) {
    let response = await fetch(`${poke_api_url}/pokemon?offset=${offset}&limit=50`);
    let data = (await response.json()) as PokeAPI.Utility.NamedAPIResourceList;
    return data;
}

export async function getPokemonByName(name: string) {
    let response = await fetch(`${poke_api_url}/pokemon/${name}`);
    let data = (await response.json()) as PokeAPI.Pokemon.Pokemon;
    return data;
}

export async function getPokemonById(id: string) {
    let response = await fetch(`${poke_api_url}/pokemon/${id}`);
    let data = (await response.json()) as PokeAPI.Pokemon.Pokemon;
    return data;
}

export async function getPokemonArray(pokemonList: PokeAPI.Utility.NamedAPIResourceList) {
    let pokeArray: PokeAPI.Pokemon.Pokemon[] = [];

    pokemonList.results.forEach(async (result) => {
        let pokemonData = await getPokemonByName(result.name);
        pokeArray.push(pokemonData);
    });

    return pokeArray;
}
