import Filter from "@/components/layout/Filter";
import Pagination from "@/components/layout/Pagination";
import PokemonGrid from "@/components/sections/PokemonGrid";
import { getPokemonArray, getPokemonList } from "@/lib/actions/pokemon";
import { getOffsetFromPage } from "@/lib/utils";

type Params = {
  searchParams: { page: string | undefined }
}

export default async function Home(props: Params) {
  let offset: number = getOffsetFromPage(props.searchParams.page);
  let pokemonList = (await getPokemonList(offset)) as PokeAPI.Utility.NamedAPIResourceList;
  const data = (await getPokemonArray(pokemonList)) as PokeAPI.Pokemon.Pokemon[];

  return (
    <main className="flex flex-col sm:justify-between sm:px-24 xl:pt-12 pt-4 min-h-screen">
      <Filter />
      <PokemonGrid data={data} />
      <Pagination offset={offset} count={pokemonList.count} />
    </main>
  );
}
