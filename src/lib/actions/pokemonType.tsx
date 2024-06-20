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

export async function getTypePokemonArray(filter: string | string[]) {
    let typePokemonArray: PokeAPI.Types.TypePokemon[] = [];
    let type: PokeAPI.Types.Type = {
        id: 0,
        name: "",
        damage_relations: {
            no_damage_to: [],
            half_damage_to: [],
            double_damage_to: [],
            no_damage_from: [],
            half_damage_from: [],
            double_damage_from: []
        },
        past_damage_relations: [],
        game_indices: [],
        generation: {
            name: "",
            url: ""
        },
        move_damage_class: {
            name: "",
            url: ""
        },
        names: [],
        pokemon: [],
        moves: []
    };

    if (Array.isArray(filter)) {
        console.log("Filter as array:", filter);
        for (const filterObj of filter) {
            type = (await getTypeByName(filterObj)) as PokeAPI.Types.Type;
            for (const typePokemon of type.pokemon) {
                if (!typePokemonArray.includes(typePokemon)) {
                    typePokemonArray.push(typePokemon);
                }
            }
        }
    } else if (filter !== '') {
        console.log("Filter as string:", filter);
        type = (await getTypeByName(filter)) as PokeAPI.Types.Type;
        for (const pokemon of type.pokemon) {
            if (!typePokemonArray.includes(pokemon)) {
                typePokemonArray.push(pokemon);
            }
        }
    }

    return typePokemonArray;
}
