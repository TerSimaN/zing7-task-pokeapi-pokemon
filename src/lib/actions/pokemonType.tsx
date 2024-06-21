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
    const mapToFilter = new Map<string, PokeAPI.Utility.NamedAPIResource>();

    if (Array.isArray(filter)) {
        console.log("Filter as array:", filter);
        let firstType = (await getTypeByName(filter[0])) as PokeAPI.Types.Type;
        firstType.pokemon.forEach((typePokemon) => {
            mapToFilter.set(typePokemon.pokemon.name, typePokemon.pokemon);
        });
        const nextFilter = filter.slice(1);
        for (const filterObj of nextFilter) {
            let nextType = (await getTypeByName(filterObj)) as PokeAPI.Types.Type;
            nextType.pokemon.forEach((typePokemon) => {
                if (mapToFilter.has(typePokemon.pokemon.name)) {
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
