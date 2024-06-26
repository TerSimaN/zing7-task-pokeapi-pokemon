import Filter from "@/components/layout/Filter";
import Pagination from "@/components/layout/Pagination";
import PokemonGrid from "@/components/layout/PokemonGrid";
import PokemonGridLoading from "@/components/loading/PokemonGridLoading";
import { getGenPokemonMap } from "@/lib/actions/generation";
import { getPokemonList } from "@/lib/actions/pokemon";
import { getTypePokemonMap } from "@/lib/actions/pokemonType";
import { getFiltersFromParams, getOffsetFromParams } from "@/lib/utils";
import { Suspense } from "react";

type Params = {
  searchParams: {
    page: string | undefined,
    [key: string]: string | string[] | undefined
  }
}

export default async function Home(props: Params) {
  let offset: number = getOffsetFromParams(props.searchParams.page);
  let typeFilter: string | string[] = getFiltersFromParams(props.searchParams["type"]);
  let genFilter: string | string[] = getFiltersFromParams(props.searchParams["gen"]);

  let entries: number = 0;
  let resourceArray: PokeAPI.Utility.NamedAPIResource[] = [];
  let pokemonList: PokeAPI.Utility.NamedAPIResourceList;

  if (typeFilter.length && genFilter.length) {
    const typePokemonMap = (await getTypePokemonMap(typeFilter)) as Map<string, PokeAPI.Utility.NamedAPIResource>;
    const genPokemonMap = (await getGenPokemonMap(genFilter)) as Map<string, PokeAPI.Utility.NamedAPIResource>;
    typePokemonMap.forEach((value, key) => {
      if (genPokemonMap.has(key)) {
        let genPokemonSpecies = genPokemonMap.get(key);
        if (genPokemonSpecies != null) {
          resourceArray.push(genPokemonSpecies);
        }
      }
    });
    
    entries = resourceArray.length;
  } else if (typeFilter.length) {
    const typePokemonMap = (await getTypePokemonMap(typeFilter)) as Map<string, PokeAPI.Utility.NamedAPIResource>;
    typePokemonMap.forEach((value, key) => {
      let pokemon = typePokemonMap.get(key);
      if (pokemon != null) {
        resourceArray.push(pokemon);
      }
    });

    entries = resourceArray.length;
  } else if (genFilter.length) {
    const genPokemonMap = (await getGenPokemonMap(genFilter)) as Map<string, PokeAPI.Utility.NamedAPIResource>;
    genPokemonMap.forEach((value, key) => {
      let pokemon = genPokemonMap.get(key);
      if (pokemon != null) {
        resourceArray.push(pokemon);
      }
    });

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
 * Finish filtering of pokemon by type filter and searching w/ autocomplete
 * Finish filtering of pokemon by pokemon generation and type filter
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
