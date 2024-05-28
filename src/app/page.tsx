import Filter from "@/components/layout/Filter";
import Pagination from "@/components/layout/Pagination";
import PokemonGrid from "@/components/sections/PokemonGrid";

export default function Home() {
  return (
    <main className="flex flex-col sm:justify-between sm:px-24 xl:pt-12 pt-4 min-h-screen">
      <Filter />
      <PokemonGrid />
      <Pagination />
    </main>
  );
}
