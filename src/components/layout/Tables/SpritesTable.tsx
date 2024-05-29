import Image from "next/image"
import { no_image } from "../../../../public/assets/images"

const SpritesTable = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg mt-6">
            <table className="font-inter text-sm text-left text-gray-500 whitespace-nowrap w-full">
                <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Default sprite
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Shiny sprite
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Female sprite
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Shiny female sprite
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <td className="p-6">
                            <Image
                                src={props.data.sprites.front_default}
                                alt="front_default"
                                width={96}
                                height={96}
                                className="hover:scale-150"
                            />
                        </td>
                        <td className="p-6">
                            <Image
                                src={props.data.sprites.front_shiny}
                                alt="front_shiny"
                                width={96}
                                height={96}
                                className="hover:scale-150"
                            />
                        </td>
                        <td className="p-6">
                            <Image
                                src={props.data.sprites.front_female ?? no_image}
                                alt="front_female"
                                width={96}
                                height={96}
                                className="hover:scale-150"
                            />
                        </td>
                        <td className="p-6">
                            <Image
                                src={props.data.sprites.front_shiny_female ?? no_image}
                                alt="front_shiny_female"
                                width={96}
                                height={96}
                                className="hover:scale-150"
                            />
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <td className="p-6">
                            <Image
                                src={props.data.sprites.back_default}
                                alt="back_default"
                                width={96}
                                height={96}
                                className="hover:scale-150"
                            />
                        </td>
                        <td className="p-6">
                            <Image
                                src={props.data.sprites.back_shiny}
                                alt="back_shiny"
                                width={96}
                                height={96}
                                className="hover:scale-150"
                            />
                        </td>
                        <td className="p-6">
                            <Image
                                src={props.data.sprites.back_female ?? no_image}
                                alt="back_female"
                                width={96}
                                height={96}
                                className="hover:scale-150"
                            />
                        </td>
                        <td className="p-6">
                            <Image
                                src={props.data.sprites.back_shiny_female ?? no_image}
                                alt="back_shiny_female"
                                width={96}
                                height={96}
                                className="hover:scale-150"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SpritesTable