"use client";

import Pagination from "@/components/layout/Pagination";
import { getGenPokemonMap } from "@/lib/actions/generation";
import { getPokemonList } from "@/lib/actions/pokemon";
import { getTypePokemonMap } from "@/lib/actions/pokemonType";
import { getFiltersFromParams, getOffsetFromParams } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

type Params = {
    searchParams: {
        page: string | undefined,
        [key: string]: string | string[] | undefined
    }
}

export default function Debug(props: Params) {
    const [resourceArray, setResourceArray] = useState<PokeAPI.Utility.NamedAPIResource[]>([]);
    const [entries, setEntries] = useState(resourceArray.length);

    const [typeFilter, setTypeFilter] = useState<string | string[] | undefined>();
    const [genFilter, setGenFilter] = useState<string | string[] | undefined>();
    const [offset, setOffset] = useState(0);

    const [searchValue, setSearchValue] = useState("");

    function handlePageChange(page: string | number) {
        let nextOffset = 0;
        if (typeof page === "string") {
            nextOffset = (parseInt(page) - 1) * 50;
        } else {
            nextOffset = (page - 1) * 50;
        }
        console.log(nextOffset);
        setOffset(nextOffset);
        getPokemonList(nextOffset).then((data) => {
            setResourceArray(data.results);
            setEntries(data.count);
        });
    }

    useEffect(() => {
        console.log("useEffect run:", resourceArray.length);
        if (typeof props.searchParams["type"] !== "undefined") {
            let nextTypeFilter = getFiltersFromParams(props.searchParams["type"]);
            setTypeFilter(nextTypeFilter);
        }

        if (typeof props.searchParams["gen"] !== "undefined") {
            let nextGenFilter = getFiltersFromParams(props.searchParams["gen"]);
            setGenFilter(nextGenFilter);
        }

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
            }
        } else {
            getPokemonList(offset).then((data) => {
                setResourceArray([...data.results]);
                setEntries(data.count);
            });
        }
    }, []);

    return (
        <main className="flex flex-col justify-between px-24 pt-12 min-h-screen">
            <ul>
                {resourceArray.map((resource, index) => (
                    <li key={index}>
                        <dl className="flex items-center justify-between gap-4 py-2">
                            <dt>{resource.name}</dt>
                            <dd>
                                <Link href={resource.url} className="text-blue-600 underline">
                                    {resource.url}
                                </Link>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ul>
            <Pagination offset={offset} entries={entries} onPageChange={handlePageChange} />
        </main>
    );
}