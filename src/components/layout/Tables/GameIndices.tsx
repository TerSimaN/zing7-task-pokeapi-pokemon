"use client";

import AccordionHeader from "@/components/ui/AccordionHeader";
import Link from "next/link";
import { useState } from "react";

const GameIndices = ({ gameIndex, gameIndexType }: { gameIndex: PokeAPI.Utility.VersionGameIndex[] | PokeAPI.Utility.GenerationGameIndex[], gameIndexType: "version" | "generation" }) => {
    const [open, setOpen] = useState(false);
    let name: string = "";
    let url: string = "";
    if (gameIndexType === "version") {
        name = "Version name";
        url = "Version url";
    } else {
        name = "Generation name";
        url = "Generation url";
    }

    return (
        <div>
            <button className="w-full" type="button" onClick={() => setOpen(!open)}>
                <AccordionHeader text="Game indices" isOpen={open} />
            </button>
            <div className={`${open ? `` : `hidden`}`}>
                <div className="overflow-x-auto shadow-md border-x sm:rounded-b-lg">
                    <table className="font-inter text-sm text-left text-gray-500 whitespace-nowrap w-full">
                        <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Game index
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    {name}
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    {url}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {gameIndex.map((gameIndex, index) => {
                                if ("version" in gameIndex) {
                                    return (
                                        <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                                            <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                                                {gameIndex.game_index}
                                            </th>
                                            <td className="px-6 py-4 capitalize">
                                                {gameIndex.version.name}
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link href={gameIndex.version.url} className="font-medium text-blue-600 hover:underline">
                                                    {gameIndex.version.url}
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                } else {
                                    return (
                                        <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                                            <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                                                {gameIndex.game_index}
                                            </th>
                                            <td className="px-6 py-4 capitalize">
                                                {gameIndex.generation.name}
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link href={gameIndex.generation.url} className="font-medium text-blue-600 hover:underline">
                                                    {gameIndex.generation.url}
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default GameIndices