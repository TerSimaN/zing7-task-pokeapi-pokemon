import Filter from "@/components/layout/Filter";
import Pagination from "@/components/layout/Pagination";
import PokemonGrid from "@/components/layout/PokemonGrid";
import PokemonGridLoading from "@/components/loading/PokemonGridLoading";
import { getPokemonList } from "@/lib/actions/pokemon";
import { getTypePokemonArray } from "@/lib/actions/pokemonType";
import { getFiltersFromParams, getOffsetFromProps } from "@/lib/utils";
import { Suspense } from "react";

type Params = {
  searchParams: {
    page: string | undefined,
    filter: string | undefined
  }
}

export default async function Home(props: Params) {
  let offset: number = getOffsetFromProps(props.searchParams.page);
  let entries: number = 0;
  let filter: string | string[] = getFiltersFromParams(props.searchParams.filter);
  let resourceArray: PokeAPI.Utility.NamedAPIResource[] = [];
  let typePokemonArray = (await getTypePokemonArray(filter));

  let pokemonList = (await getPokemonList(offset)) as PokeAPI.Utility.NamedAPIResourceList;

  if (typePokemonArray.length) {
    for (const typePokemon of typePokemonArray) {
      if (!resourceArray.includes(typePokemon.pokemon)) {
        resourceArray.push(typePokemon.pokemon);
      }
    }
    entries = resourceArray.length;
  } else {
    entries = pokemonList.count;
    resourceArray = resourceArray.concat(pokemonList.results);
  }

  return (
    <main className="flex flex-col sm:justify-between sm:px-24 xl:pt-12 pt-4 min-h-screen">
      <Filter />
      <Suspense fallback={<PokemonGridLoading />}>
        <PokemonGrid resourceArray={resourceArray} />
      </Suspense>
      <Pagination offset={offset} entries={entries} />
    </main>
  );
}
