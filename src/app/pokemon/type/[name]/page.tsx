import { getTypeByName } from "@/lib/actions/pokemonType";
import GameIndices from "@/components/layout/Tables/GameIndices";
import DamageRelations from "@/components/layout/Tables/Type/DamageRelations";
import Generation from "@/components/layout/Tables/Generation";
import MoveDamage from "@/components/layout/Tables/MoveDamage";
import Moves from "@/components/layout/Tables/Moves";
import Names from "@/components/layout/Tables/Names";
import PastDamageRelations from "@/components/layout/Tables/Type/PastDamageRelations";
import Pokemon from "@/components/layout/Tables/Pokemon";

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
                    <DamageRelations type={typeData} />
                    <GameIndices gameIndex={typeData.game_indices} gameIndexType="generation" />
                    <Generation generation={typeData.generation} />
                    <MoveDamage moveDamage={typeData.move_damage_class} />
                    <Moves moves={typeData.moves} />
                    <Names names={typeData.names} />
                    <PastDamageRelations pastTypeRelations={typeData.past_damage_relations} />
                    <Pokemon pokemon={typeData.pokemon} />
                </div>
            </div>
        </main>
    );
}