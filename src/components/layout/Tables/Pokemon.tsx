"use client";

import AccordionHeader from "@/components/ui/AccordionHeader";
import { getPokemonIdFromResultUrl } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const Pokemon = ({ pokemon }: { pokemon: PokeAPI.Types.TypePokemon[] }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="w-full" type="button" onClick={() => setOpen(!open)}>
                <AccordionHeader text="Pokemon" isOpen={open} className="border-b" />
            </button>
            <div className={`${open ? `` : `hidden`}`}>
                <div className="overflow-x-auto shadow-md border-x sm:rounded-b-lg">
                    <table className="font-inter text-sm text-left text-gray-500 whitespace-nowrap w-full">
                        <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Slot
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Pokemon name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Pokemon url
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemon.map((pokemon, index) => {
                                let pokemonId: string = getPokemonIdFromResultUrl(pokemon.pokemon.url);

                                return (
                                    <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                                        <th scope="row" className="font-medium text-gray-900 px-6 py-4 capitalize">
                                            {pokemon.slot}
                                        </th>
                                        <th scope="row" className="font-medium text-gray-900 px-6 py-4 capitalize">
                                            {pokemon.pokemon.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            <Link href={`/pokemon/${pokemonId}`} className="font-medium text-blue-600 hover:underline">
                                                Link to pokemon
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Pokemon