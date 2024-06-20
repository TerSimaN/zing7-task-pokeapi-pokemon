import { bug_type, dark_type, dragon_type, electric_type, fairy_type, fighting_type, fire_type, flying_type, ghost_type, grass_type, ground_type, ice_type, no_image_type, normal_type, poison_type, psychic_type, rock_type, shadow_type, steel_type, stellar_type, unknown_type, water_type } from "../../public/assets/types";

export const poke_api_url = 'https://pokeapi.co/api/v2';

export const types = [
    { typeName: 'normal', typeIconSrc: normal_type, typeIconAlt: 'normal_type' },
    { typeName: 'fighting', typeIconSrc: fighting_type, typeIconAlt: 'fighting_type' },
    { typeName: 'flying', typeIconSrc: flying_type, typeIconAlt: 'flying_type' },
    { typeName: 'poison', typeIconSrc: poison_type, typeIconAlt: 'poison_type' },
    { typeName: 'ground', typeIconSrc: ground_type, typeIconAlt: 'ground_type' },
    { typeName: 'rock', typeIconSrc: rock_type, typeIconAlt: 'rock_type' },
    { typeName: 'bug', typeIconSrc: bug_type, typeIconAlt: 'bug_type' },
    { typeName: 'ghost', typeIconSrc: ghost_type, typeIconAlt: 'ghost_type' },
    { typeName: 'steel', typeIconSrc: steel_type, typeIconAlt: 'steel_type' },
    { typeName: 'fire', typeIconSrc: fire_type, typeIconAlt: 'fire_type' },
    { typeName: 'water', typeIconSrc: water_type, typeIconAlt: 'water_type' },
    { typeName: 'grass', typeIconSrc: grass_type, typeIconAlt: 'grass_type' },
    { typeName: 'electric', typeIconSrc: electric_type, typeIconAlt: 'electric_type' },
    { typeName: 'psychic', typeIconSrc: psychic_type, typeIconAlt: 'psychic_type' },
    { typeName: 'ice', typeIconSrc: ice_type, typeIconAlt: 'ice_type' },
    { typeName: 'dragon', typeIconSrc: dragon_type, typeIconAlt: 'dragon_type' },
    { typeName: 'dark', typeIconSrc: dark_type, typeIconAlt: 'dark_type' },
    { typeName: 'fairy', typeIconSrc: fairy_type, typeIconAlt: 'fairy_type' },
    // { typeName: 'stellar', typeIconSrc: stellar_type, typeIconAlt: 'stellar_type' },
    // { typeName: 'unknown', typeIconSrc: unknown_type, typeIconAlt: 'unknown_type' },
    // { typeName: 'shadow', typeIconSrc: shadow_type, typeIconAlt: 'shadow_type' },
];

export const generations = [
    { genName: 'gen-1', genId: '1', genIconSrc: no_image_type, genIconAlt: '' },
    { genName: 'gen-2', genId: '2', genIconSrc: no_image_type, genIconAlt: '' },
    { genName: 'gen-3', genId: '3', genIconSrc: no_image_type, genIconAlt: '' },
    { genName: 'gen-4', genId: '4', genIconSrc: no_image_type, genIconAlt: '' },
    { genName: 'gen-5', genId: '5', genIconSrc: no_image_type, genIconAlt: '' },
    { genName: 'gen-6', genId: '6', genIconSrc: no_image_type, genIconAlt: '' },
    { genName: 'gen-7', genId: '7', genIconSrc: no_image_type, genIconAlt: '' },
    { genName: 'gen-8', genId: '8', genIconSrc: no_image_type, genIconAlt: '' },
    { genName: 'gen-9', genId: '9', genIconSrc: no_image_type, genIconAlt: '' },
];
