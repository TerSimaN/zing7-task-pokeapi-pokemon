import Link from "next/link"

const AbilitiesTable = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="font-inter text-sm text-left text-gray-500 w-full">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Ability slot
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ability name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ability url
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ability is hidden
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.abilities.map((ability, index) => (
                        <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                            <th scope="row" className="font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                {ability.slot}
                            </th>
                            <td className="px-6 py-4 capitalize">
                                {ability.ability.name}
                            </td>
                            <td className="px-6 py-4">
                                <Link href={ability.ability.url} className="font-medium text-blue-600 hover:underline">{ability.ability.url}</Link>
                            </td>
                            <td className="px-6 py-4 capitalize">
                                {`${ability.is_hidden ? 'yes' : 'no'}`}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AbilitiesTable