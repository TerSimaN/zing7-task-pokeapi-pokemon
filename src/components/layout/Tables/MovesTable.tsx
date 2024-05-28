import MoveTableRow from "./MoveTableRow";

const MovesTable = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="font-inter text-sm text-left text-gray-500 w-full">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Move name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Move url
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Version group details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.moves.map((move, index) => (
                        <MoveTableRow key={index} move={move} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MovesTable