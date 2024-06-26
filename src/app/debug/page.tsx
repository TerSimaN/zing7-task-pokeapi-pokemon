"use client";

import { getGenPokemonMap } from "@/lib/actions/generation";
import { getPokemonList } from "@/lib/actions/pokemon";
import { getTypePokemonMap } from "@/lib/actions/pokemonType";
import { getFiltersFromParams, getOffsetFromParams } from "@/lib/utils";
import { useEffect, useState } from "react";

type Params = {
    searchParams: {
        page: string | undefined,
        [key: string]: string | string[] | undefined
    }
}

export default function Debug(props: Params) {
    const [resourceArray, setResourceArray] = useState<PokeAPI.Utility.NamedAPIResource[]>([]);
    const [typePokemonMap, setTypePokemonMap] = useState<Map<string, PokeAPI.Utility.NamedAPIResource>>();
    const [genPokemonMap, setGenPokemonMap] = useState<Map<string, PokeAPI.Utility.NamedAPIResource>>();

    const [typeFilter, setTypeFilter] = useState<string | string[] | undefined>(props.searchParams["type"]);
    const [genFilter, setGenFilter] = useState<string | string[] | undefined>(props.searchParams["gen"]);
    const [entries, setEntries] = useState(0);
    const [offset, setOffset] = useState(0);

    const [searchValue, setSearchValue] = useState("");

    if (props.searchParams.page) {
        let nextOffset = getOffsetFromParams(props.searchParams.page);
        setOffset(nextOffset);
    }

    if (typeof props.searchParams["type"] !== "undefined") {
        let nextTypeFilter = getFiltersFromParams(props.searchParams["type"]);
        setTypeFilter(nextTypeFilter);
    }

    if (typeof props.searchParams["gen"] !== "undefined") {
        let nextGenFilter = getFiltersFromParams(props.searchParams["gen"]);
        setGenFilter(nextGenFilter);
    }

    useEffect(() => {
        const nextResourceArray = resourceArray.slice();
        if ((typeof typeFilter !== "undefined") && (typeof genFilter !== "undefined")) {
            if (typeFilter.length && genFilter.length) {
                let typePokemonMapData = new Map<string, PokeAPI.Utility.NamedAPIResource>();
                let genPokemonMapData = new Map<string, PokeAPI.Utility.NamedAPIResource>();
                getTypePokemonMap(typeFilter).then((data) => {
                    typePokemonMapData = data;
                });
                getGenPokemonMap(genFilter).then((data) => {
                    genPokemonMapData = data;
                });
                typePokemonMapData.forEach((value, key) => {
                    if (genPokemonMapData.has(key)) {
                        let genPokemon = genPokemonMapData.get(key);
                        if (genPokemon != null) {
                            nextResourceArray.push(genPokemon);
                        }
                    }
                });
                setResourceArray([...resourceArray, ...nextResourceArray]);
                setEntries(resourceArray.length);
            }
        } else if (typeof typeFilter !== "undefined") {
            if (typeFilter.length) {
                getTypePokemonMap(typeFilter).then((typePokemonMapData) => {
                    typePokemonMapData.forEach((value, key) => {
                        let pokemon = typePokemonMapData.get(key);
                        if (pokemon != null) {
                            nextResourceArray.push(pokemon);
                        }
                    });
                });
                setResourceArray([...resourceArray, ...nextResourceArray]);
                setEntries(resourceArray.length);
            }
        } else if (typeof genFilter !== "undefined") {
            if (genFilter.length) {
                getGenPokemonMap(genFilter).then((genPokemonMapData) => {
                    genPokemonMapData.forEach((value, key) => {
                        let pokemon = genPokemonMapData.get(key);
                        if (pokemon != null) {
                            nextResourceArray.push(pokemon);
                        }
                    });
                });
                setResourceArray([...resourceArray, ...nextResourceArray]);
                setEntries(resourceArray.length);
            }
        } else {
            getPokemonList(offset).then((data) => {
                setResourceArray([...resourceArray, ...data.results]);
                setEntries(data.count);
            });
        }
    }, []);

    return (
        <></>
    );
}