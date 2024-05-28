import Link from "next/link"

const GameIndicesTable = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="font-inter text-sm text-left text-gray-500 w-full">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Game index
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Version name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Version url
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.game_indices.map((gameIndex, index) => (
                        <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                            <th scope="row" className="font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                {gameIndex.game_index}
                            </th>
                            <td className="px-6 py-4 capitalize">
                                {gameIndex.version.name}
                            </td>
                            <td className="px-6 py-4">
                                <Link href={gameIndex.version.url} className="font-medium text-blue-600 hover:underline">{gameIndex.version.url}</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GameIndicesTable