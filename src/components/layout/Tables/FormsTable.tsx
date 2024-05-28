import Link from "next/link"

const FormsTable = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="font-inter text-sm text-left text-gray-500 w-full">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Form name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Form url
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.forms.map((form, index) => (
                        <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                            <th scope="row" className="font-medium text-gray-900 px-6 py-4 whitespace-nowrap capitalize">
                                {form.name}
                            </th>
                            <td className="px-6 py-4">
                                <Link href={form.url} className="font-medium text-blue-600 hover:underline">{form.url}</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FormsTable