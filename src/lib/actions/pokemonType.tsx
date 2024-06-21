import { poke_api_url } from "@/config/constants";

export async function getTypeList() {
    let response = await fetch(`${poke_api_url}/type?limit=21`);
    let data = (await response.json()) as PokeAPI.Utility.NamedAPIResourceList;
    return data;
}

export async function getTypeByName(name: string) {
    let response = await fetch(`${poke_api_url}/type/${name}`);
    let data = (await response.json()) as PokeAPI.Types.Type;
    return data;
}

export async function getTypeById(id: string) {
    let response = await fetch(`${poke_api_url}/type/${id}`);
    let data = (await response.json()) as PokeAPI.Types.Type;
    return data;
}

export async function getTypeArray(typeList: PokeAPI.Utility.NamedAPIResourceList) {
    let typeArray: PokeAPI.Types.Type[] = [];

    typeList.results.forEach(async (result) => {
        let typeData = (await getTypeByName(result.name)) as PokeAPI.Types.Type;
        typeArray.push(typeData);
    });

    return typeArray;
}

export async function getTypePokemonMap(filter: string | string[]) {
    const pokemonMap = new Map<string, PokeAPI.Utility.NamedAPIResource>();

    if (Array.isArray(filter)) {
        console.log("Filter as array:", filter);
        for (const filterObj of filter) {
            let type = (await getTypeByName(filterObj)) as PokeAPI.Types.Type;
            type.pokemon.forEach((typePokemon) => {
                if (!pokemonMap.has(typePokemon.pokemon.name)) {
                    pokemonMap.set(typePokemon.pokemon.name, typePokemon.pokemon);
                }
            });
        }
    } else if (filter !== '') {
        console.log("Filter as string:", filter);
        let type = (await getTypeByName(filter)) as PokeAPI.Types.Type;
        type.pokemon.forEach((typePokemon) => {
            if (!pokemonMap.has(typePokemon.pokemon.name)) {
                pokemonMap.set(typePokemon.pokemon.name, typePokemon.pokemon);
            }
        });
    }

    return pokemonMap;
}
