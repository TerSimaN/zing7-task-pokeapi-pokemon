import CriesCard from "@/components/layout/Cards/CriesCard";
import SpeciesCard from "@/components/layout/Cards/SpeciesCard";
import StatsCard from "@/components/layout/Cards/StatsCard";
import TypesCard from "@/components/layout/Cards/TypesCard";
import AbilitiesTable from "@/components/layout/Tables/AbilitiesTable";
import FormsTable from "@/components/layout/Tables/FormsTable";
import GameIndicesTable from "@/components/layout/Tables/GameIndicesTable";
import HeldItemsTable from "@/components/layout/Tables/HeldItemsTable";
import MainDescriptionTable from "@/components/layout/Tables/MainDescriptionTable";
import MovesTable from "@/components/layout/Tables/MovesTable";
import PastTypesTable from "@/components/layout/Tables/PastTypesTable";
import SpritesTable from "@/components/layout/Tables/SpritesTable";
import { getPokemonById } from "@/lib/actions/pokemon";

type Params = {
    params: { id: string },
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function PokemonDetails(props: Params) {
    const data = (await getPokemonById(props.params.id)) as PokeAPI.Pokemon.Pokemon;

    return (
        <main className="sm:px-12 lg:px-24 px-4 sm:py-8 py-4 min-h-screen">
            <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-8 max-w-screen-xl">
                <div className="col-span-3 w-full">
                    <h2 className="font-inter font-semibold sm:text-2xl text-xl text-gray-900">Pokemon description</h2>
                    <MainDescriptionTable data={data} />
                    <SpritesTable data={data} />
                    <div className="mt-8">
                        <AbilitiesTable data={data} />
                        <FormsTable data={data} />
                        <GameIndicesTable data={data} />
                        <HeldItemsTable data={data} />
                        <MovesTable data={data} />
                        <PastTypesTable data={data} />
                    </div>
                </div>
                <div className="col-span-2 lg:block grid sm:grid-cols-2 grid-cols-1 gap-4 lg:space-y-4 lg:mt-0 mt-4 w-full">
                    <StatsCard data={data} />
                    <TypesCard data={data} />
                    <SpeciesCard data={data} />
                    <CriesCard data={data} />
                </div>
            </div>
        </main>
    )
}