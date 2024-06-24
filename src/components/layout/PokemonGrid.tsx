import Image from "next/image"
import Link from "next/link"
import { no_sprite } from "../../../public/assets/images"
import { getIconByTypeName, getPokemonIdFromResultUrl } from "@/lib/utils"
import { getPokemonArray, getPokemonById, getPokemonByName } from "@/lib/actions/pokemon"

const PokemonGrid = (props: { resourceArray: PokeAPI.Utility.NamedAPIResource[], searchFilter: string }) => {
    // console.log(props.resourceArray);
    return (
        <section className="bg-white">
            <div className="lg:px-6 sm:px-4 px-8 lg:py-16 py-8 mx-auto max-w-screen-xl">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {props.resourceArray.map(async (resource, index) => {
                        let pokemonId: string = getPokemonIdFromResultUrl(resource.url);
                        let pokemon = (await getPokemonById(pokemonId)) as PokeAPI.Pokemon.Pokemon;

                        /* if (
                            pokemon.name.toLowerCase().indexOf(
                                props.searchFilter.toLowerCase()
                            ) === -1
                        ) {
                            return;
                        } */

                        return (
                            <article key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
                                <Link href={`/pokemon/${pokemon.id}`}>
                                    <Image
                                        src={pokemon.sprites.front_default ?? no_sprite}
                                        alt="pokemon image"
                                        width={288}
                                        height={288}
                                        className="rounded-lg mb-5"
                                    />
                                </Link>
                                <h2 className="font-inter font-bold text-2xl tracking-tight text-gray-900 capitalize mb-2">
                                    <Link href={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
                                </h2>
                                <div className="flex items-center gap-2 mb-5">
                                    {pokemon.types.map((type, index) => {
                                        const typeIcon = getIconByTypeName(type.type.name);
                                        return (
                                            <Link href={`/pokemon/type/${type.type.name}`} key={index}
                                                className="inline-flex items-center bg-gray-100 rounded font-inter font-medium sm:text-sm text-base text-gray-500 pl-1.5 pr-2 py-1 capitalize select-none hover:bg-gray-200 hover:text-gray-600"
                                            >
                                                <Image src={typeIcon.typeIconSrc} alt={typeIcon.typeIconAlt} className="sm:size-7 size-9 me-1" />
                                                {type.type.name}
                                            </Link>
                                        )
                                    })}
                                </div>
                                <div className="flex justify-between items-center">
                                    <Link href={`/pokemon/${pokemon.id}`} className="inline-flex items-center font-inter font-medium text-gray-600 hover:underline">
                                        Read more
                                        <svg className="ml-2 size-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PokemonGrid