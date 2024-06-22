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

export function getPokemonArray(resourceArray: PokeAPI.Utility.NamedAPIResource[]) {
    let pokeArray: PokeAPI.Pokemon.Pokemon[] = [];

    resourceArray.forEach(async (resource) => {
        let pokemonData = await getPokemonByName(resource.name);
        pokeArray.push(pokemonData);
    });

    return pokeArray;
}

export function searchFilter(formData: FormData) {
    const query = formData.get("search-bar");
    alert(`You searched for '${query}'`);
}
