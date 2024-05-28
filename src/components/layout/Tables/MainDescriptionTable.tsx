import Link from "next/link"

const MainDescriptionTable = (props: {data: PokeAPI.Pokemon.Pokemon}) => {
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table className="font-inter text-sm text-left text-gray-500 w-full">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="min-w-48"></th>
                        <th scope="col" className="whitespace-nowrap w-full"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                            Name
                        </th>
                        <td className="px-6 py-4 capitalize">
                            {props.data.name}
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                            Base experience
                        </th>
                        <td className="px-6 py-4">
                            {props.data.base_experience}
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                            Location area encounters
                        </th>
                        <td className="px-6 py-4">
                            <Link href={props.data.location_area_encounters} className="font-medium text-blue-600 hover:underline">
                                {props.data.location_area_encounters}
                            </Link>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                            Height
                        </th>
                        <td className="px-6 py-4">
                            {props.data.height}
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                            Weight
                        </th>
                        <td className="px-6 py-4">
                            {props.data.weight}
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                            Is default
                        </th>
                        <td className="px-6 py-4 capitalize">
                            {`${props.data.is_default ? 'yes' : 'no'}`}
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
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

export default MainDescriptionTable