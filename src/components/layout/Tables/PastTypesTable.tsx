import PastTypesTableRow from "./PastTypesTableRow"

const PastTypesTable = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="font-inter text-sm text-left text-gray-500 w-full">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Generation name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Generation url
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Past types
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.past_types.map((pastType, index) => (
                        <PastTypesTableRow key={index} pastType={pastType} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PastTypesTable