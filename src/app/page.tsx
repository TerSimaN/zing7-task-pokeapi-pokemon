import Filter from "@/components/layout/Filter";
import Pagination from "@/components/layout/Pagination";
import PokemonGrid from "@/components/sections/PokemonGrid";
import { getPokemonList } from "@/lib/actions/pokemon";
import { getOffsetFromPage } from "@/lib/utils";

type Params = {
  searchParams: {
    page: string | undefined,
    filter: string | string[] | undefined
  }
}

export default async function Home(props: Params) {
  let offset: number = getOffsetFromPage(props.searchParams.page);
  let resourceArray: PokeAPI.Utility.NamedAPIResource[] = [];

  let pokemonList = (await getPokemonList(offset)) as PokeAPI.Utility.NamedAPIResourceList;
  resourceArray = resourceArray.concat(pokemonList.results);

  return (
    <main className="flex flex-col sm:justify-between sm:px-24 xl:pt-12 pt-4 min-h-screen">
      <Filter />
      <PokemonGrid resourceArray={resourceArray} />
      <Pagination offset={offset} pokeList={pokemonList} />
    </main>
  );
}
