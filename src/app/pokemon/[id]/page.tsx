import CriesCard from "@/components/layout/Cards/CriesCard";
import SpeciesCard from "@/components/layout/Cards/SpeciesCard";
import StatsCard from "@/components/layout/Cards/StatsCard";
import TypesCard from "@/components/layout/Cards/TypesCard";
import PokemonAbilities from "@/components/layout/Tables/Pokemon/PokemonAbilities";
import PokemonForms from "@/components/layout/Tables/Pokemon/PokemonForms";
import GameIndices from "@/components/layout/Tables/GameIndices";
import PokemonDescription from "@/components/layout/Tables/Pokemon/PokemonDescription";
import HeldItems from "@/components/layout/Tables/Pokemon/HeldItems";
import PokemonMoves from "@/components/layout/Tables/Pokemon/PokemonMoves";
import PastTypes from "@/components/layout/Tables/Pokemon/PastTypes";
import PokemonSprites from "@/components/layout/Tables/Pokemon/PokemonSprites";
import { getPokemonById } from "@/lib/actions/pokemon";

type Params = {
    params: { id: string },
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function PokemonDetails(props: Params) {
    const pokemonData = (await getPokemonById(props.params.id)) as PokeAPI.Pokemon.Pokemon;

    return (
        <main className="sm:px-12 lg:px-24 px-4 sm:py-8 py-4 min-h-screen">
            <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-8 max-w-screen-xl">
                <div className="col-span-3 w-full">
                    <h2 className="font-inter font-semibold sm:text-2xl text-xl text-gray-900">Pokemon description</h2>
                    <PokemonDescription pokemon={pokemonData} />
                    <PokemonSprites pokemon={pokemonData} />
                    <div className="mt-8">
                        <PokemonAbilities pokemon={pokemonData} />
                        <PokemonForms pokemon={pokemonData} />
                        <GameIndices gameIndex={pokemonData.game_indices} gameIndexType="version" />
                        <HeldItems pokemon={pokemonData} />
                        <PokemonMoves pokemon={pokemonData} />
                        <PastTypes pokemon={pokemonData} />
                    </div>
                </div>
                <div className="col-span-2 lg:block grid sm:grid-cols-2 grid-cols-1 gap-4 lg:space-y-4 lg:mt-0 mt-4 w-full">
                    <StatsCard pokemon={pokemonData} />
                    <TypesCard pokemon={pokemonData} />
                    <SpeciesCard pokemon={pokemonData} />
                    <CriesCard pokemon={pokemonData} />
                </div>
            </div>
        </main>
    )
}