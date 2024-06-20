// "use client";

import Filter from "@/components/layout/Filter";
import Pagination from "@/components/layout/Pagination";
import PokemonGrid from "@/components/layout/PokemonGrid";
import PokemonGridLoading from "@/components/loading/PokemonGridLoading";
import { getGenerationPokemonSpeciesArray } from "@/lib/actions/generation";
import { getPokemonList } from "@/lib/actions/pokemon";
import { getTypePokemonArray } from "@/lib/actions/pokemonType";
import { getFiltersFromParams, getOffsetFromParams } from "@/lib/utils";
import { Suspense, useEffect, useState } from "react";

type Params = {
  searchParams: {
    page: string | undefined,
    [key: string]: string | string[] | undefined
  }
}

export default async function Home(props: Params) {
  // const [pokemonList, setPokemonList] = useState({} as PokeAPI.Utility.NamedAPIResourceList);
  // const [typePokemonArray, setTypePokemonArray] = useState([] as PokeAPI.Types.TypePokemon[]);
  // const [resourceArray, setResourceArray] = useState([] as PokeAPI.Utility.NamedAPIResource[]);
  // const [entries, setEntries] = useState(0);
  // const [searchValue, setSearchValue] = useState("");

  let offset: number = getOffsetFromParams(props.searchParams.page);
  let typeFilter: string | string[] = getFiltersFromParams(props.searchParams["type"]);
  let genFilter: string | string[] = getFiltersFromParams(props.searchParams["gen"]);

  let entries: number = 0;
  let resourceArray: PokeAPI.Utility.NamedAPIResource[] = [];
  let typePokemonArray: PokeAPI.Types.TypePokemon[] = [];
  let generationPokemonSpeciesArray: PokeAPI.Utility.NamedAPIResource[] = [];
  let pokemonList: PokeAPI.Utility.NamedAPIResourceList;

  // useEffect(() => {
  //   if (filter) {
  //     getTypePokemonArray(filter).then((data) => {
  //       setTypePokemonArray([...typePokemonArray, ...data]);
  //     });
  //   } else {
  //     getPokemonList(offset).then((data) => {
  //       setPokemonList(data);
  //       setResourceArray([...resourceArray, ...data.results]);
  //       setEntries(data.count);
  //     });
  //   }
  // }, []);

  if (typeFilter.length && genFilter.length) {
    typePokemonArray = (await getTypePokemonArray(typeFilter)) as PokeAPI.Types.TypePokemon[];
    generationPokemonSpeciesArray = (await getGenerationPokemonSpeciesArray(genFilter)) as PokeAPI.Utility.NamedAPIResource[];
    for (const typePokemon of typePokemonArray) {
      if (!resourceArray.includes(typePokemon.pokemon)) {
        resourceArray.push(typePokemon.pokemon);
      }
    }
    for (const pokemonSpecies of generationPokemonSpeciesArray) {
      if (!resourceArray.includes(pokemonSpecies)) {
        resourceArray.push(pokemonSpecies);
      }
    }

    entries = resourceArray.length;
  } else if (typeFilter.length) {
    typePokemonArray = (await getTypePokemonArray(typeFilter)) as PokeAPI.Types.TypePokemon[];
    for (const typePokemon of typePokemonArray) {
      if (!resourceArray.includes(typePokemon.pokemon)) {
        resourceArray.push(typePokemon.pokemon);
      }
    }

    entries = resourceArray.length;
  } else if (genFilter.length) {
    generationPokemonSpeciesArray = (await getGenerationPokemonSpeciesArray(genFilter)) as PokeAPI.Utility.NamedAPIResource[];
    for (const pokemonSpecies of generationPokemonSpeciesArray) {
      if (!resourceArray.includes(pokemonSpecies)) {
        resourceArray.push(pokemonSpecies);
      }
    }

    entries = resourceArray.length;
  } else {
    pokemonList = (await getPokemonList(offset)) as PokeAPI.Utility.NamedAPIResourceList;
    entries = pokemonList.count;
    resourceArray = resourceArray.concat(pokemonList.results);
  }

  return (
    <main className="flex flex-col sm:justify-between sm:px-24 xl:pt-12 pt-4 min-h-screen">
      <Filter searchValue={"searchValue"} onSearchBarChange={"setSearchValue"} />
      <Suspense fallback={<PokemonGridLoading />}>
        <PokemonGrid resourceArray={resourceArray} searchFilter={"searchValue"} />
      </Suspense>
      <Pagination offset={offset} entries={entries} />
    </main>
  );
}

/** TODO:
 * DO NOT Try to make Home page.tsx a client component (UNLESS Really needed),
 *  because it breaks fetch requests
 * 
 * Finish filtering of pokemon by type filter and searching w/ autocomplete
 * Finish filtering of pokemon by pokemon generation and type filter
 * 
 * Use https://flowbite.com/docs/components/skeleton/ as:
 *  LoadingSkeleton.tsx
 *  a loading page when waiting for data
 *  fetched from filtering by type or w/ search to load
 * 
 * Change pagination bar to not scroll, but show
 *  '[1][2][3][...][25][26][27]' page numbers instead
 * 
 * (May not be possible) Try to fix currentPage, nextPage and previousPage values
 * when returning from /pokemon/[id] page via the Go Back browser button
 * 
 * Decide what to do with 'stellar, unknown and shadow' types
 * 
 * Write here if more TODO's are needed
 */
