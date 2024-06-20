namespace PokeAPI {
    namespace Utility {
        type NamedAPIResourceList = {
            count: number,
            next: string | null,
            previous: string | null,
            results: NamedAPIResource[]
        }

        type APIResourceList = {
            count: number,
            next: string | null,
            previous: string | null,
            results: APIResource[]
        }

        type NamedAPIResource = {
            name: string,
            url: string
        }

        type APIResource = {
            url: string
        }

        type GenerationGameIndex = {
            game_index: number,
            generation: NamedAPIResource
        }

        type Name = {
            name: string,
            language: NamedAPIResource
        }

        type VersionGameIndex = {
            game_index: number,
            version: NamedAPIResource
        }
    }

    namespace Game {
        type Generation = {
            id: number,
            name: string,
            abilities: Utility.NamedAPIResource[],
            names: Utility.Name[],
            main_region: Utility.NamedAPIResource,
            moves: Utility.NamedAPIResource[]
            pokemon_species: Utility.NamedAPIResource[],
            types: Utility.NamedAPIResource[],
            version_groups: Utility.NamedAPIResource[]
        }
    }

    namespace Pokemon {
        type Pokemon = {
            id: number,
            name: string,
            base_experience: number,
            height: number,
            is_default: boolean,
            order: number,
            weight: number,
            abilities: PokemonAbility[],
            forms: Utility.NamedAPIResource[],
            game_indices: Utility.VersionGameIndex[],
            held_items: PokemonHeldItem[],
            location_area_encounters: string,
            moves: PokemonMove[],
            past_types: PokemonTypePast[],
            sprites: PokemonSprites,
            cries: PokemonCries,
            species: Utility.NamedAPIResource,
            stats: PokemonStat[],
            types: PokemonType[]
        }

        type PokemonAbility = {
            is_hidden: boolean,
            slot: number,
            ability: Utility.NamedAPIResource
        }

        type PokemonType = {
            slot: number,
            type: Utility.NamedAPIResource
        }

        type PokemonTypePast = {
            generation: Utility.NamedAPIResource,
            types: PokemonType[]
        }

        type PokemonHeldItem = {
            item: Utility.NamedAPIResource,
            version_details: PokemonHeldItemVersion[]
        }

        type PokemonHeldItemVersion = {
            version: Utility.NamedAPIResource,
            rarity: number
        }

        type PokemonMove = {
            move: Utility.NamedAPIResource,
            version_group_details: PokemonMoveVersion[]
        }

        type PokemonMoveVersion = {
            move_learn_method: Utility.NamedAPIResource,
            version_group: Utility.NamedAPIResource,
            level_learned_at: number
        }

        type PokemonStat = {
            stat: Utility.NamedAPIResource,
            effort: number,
            base_stat: number
        }

        type PokemonSprites = {
            front_default: string | null,
            front_shiny: string | null,
            front_female: string | null,
            front_shiny_female: string | null,
            back_default: string | null,
            back_shiny: string | null,
            back_female: string | null,
            back_shiny_female: string | null
        }

        type PokemonCries = {
            latest: string,
            legacy: string
        }
    }

    namespace Types {
        type Type = {
            id: number,
            name: string,
            damage_relations: TypeRelations,
            past_damage_relations: TypeRelationsPast[],
            game_indices: Utility.GenerationGameIndex[],
            generation: Utility.NamedAPIResource,
            move_damage_class: Utility.NamedAPIResource
            names: Utility.Name[]
            pokemon: TypePokemon[],
            moves: Utility.NamedAPIResource[]
        }

        type TypePokemon = {
            slot: number,
            pokemon: Utility.NamedAPIResource
        }

        type TypeRelations = {
            no_damage_to: Utility.NamedAPIResource[],
            half_damage_to: Utility.NamedAPIResource[],
            double_damage_to: Utility.NamedAPIResource[],
            no_damage_from: Utility.NamedAPIResource[],
            half_damage_from: Utility.NamedAPIResource[],
            double_damage_from: Utility.NamedAPIResource[]
        }

        type TypeRelationsPast = {
            generation: Utility.NamedAPIResource,
            damage_relations: TypeRelations
        }
    }
}