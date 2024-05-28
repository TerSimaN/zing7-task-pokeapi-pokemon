import HeldItemsTableRow from "./HeldItemsTableRow"

const HeldItemsTable = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="font-inter text-sm text-left text-gray-500 w-full">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Held item name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Held item url
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Version details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.held_items.map((heldItem, index) => (
                        <HeldItemsTableRow key={index} heldItem={heldItem} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default HeldItemsTable