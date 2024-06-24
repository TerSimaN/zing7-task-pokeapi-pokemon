import GameIndices from "@/components/layout/Tables/GameIndices";
import DamageRelations from "@/components/layout/Tables/Type/DamageRelations";
import Generation from "@/components/layout/Tables/Generation";
import TypesTable from "@/components/layout/Tables/TypesTable";
import { getTypeByName } from "@/lib/actions/pokemonType";
import MoveDamage from "@/components/layout/Tables/MoveDamage";

type Params = {
    params: { name: string },
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function TypeDetails(props: Params) {
    const typeData = (await getTypeByName(props.params.name)) as PokeAPI.Types.Type;

    return (
        <main className="sm:px-12 lg:px-24 px-4 sm:py-8 py-4 min-h-screen">
            <div className="max-w-screen-xl">
                <h2 className="font-inter font-semibold sm:text-2xl text-xl text-gray-900 capitalize">
                    {typeData.name} Type description
                </h2>
                <div className="mt-8">
                    <DamageRelations data={typeData} />
                    <GameIndices data={typeData.game_indices} dataType="generation" />
                    <Generation data={typeData.generation} />
                    <MoveDamage data={typeData.move_damage_class} />
                    <TypesTable data={typeData} />
                </div>
            </div>
        </main>
    );
}