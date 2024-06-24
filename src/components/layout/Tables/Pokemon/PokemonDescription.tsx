import Link from "next/link"

const PokemonDescription = (props: {data: PokeAPI.Pokemon.Pokemon}) => {
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg mt-4">
            <table className="font-inter text-sm text-left text-gray-500 whitespace-nowrap w-full">
                <thead>
                    <tr>
                        <th scope="col" className="min-w-48"></th>
                        <th scope="col" className="whitespace-nowrap w-full"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                            Name
                        </th>
                        <td className="px-6 py-4 capitalize">
                            {props.data.name}
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                            Base experience
                        </th>
                        <td className="px-6 py-4">
                            {props.data.base_experience}
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                            Location area encounters
                        </th>
                        <td className="px-6 py-4">
                            <Link href={props.data.location_area_encounters} className="font-medium text-blue-600 hover:underline">
                                {props.data.location_area_encounters}
                            </Link>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                            Height
                        </th>
                        <td className="px-6 py-4">
                            {props.data.height}
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                            Weight
                        </th>
                        <td className="px-6 py-4">
                            {props.data.weight}
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                            Is default
                        </th>
                        <td className="px-6 py-4 capitalize">
                            {`${props.data.is_default ? 'yes' : 'no'}`}
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                            Order
                        </th>
                        <td className="px-6 py-4">
                            {props.data.order}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PokemonDescription