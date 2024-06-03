import Image from "next/image"
import { no_image } from "../../../public/assets/images"
import { no_image_type } from "../../../public/assets/types"

const CardLoadingCustom = () => {
    return (
        <article className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <Image
                src={no_image}
                alt="no image"
                className="rounded-lg mb-5"
            />
            <h2 className="font-inter font-bold text-2xl tracking-tight text-gray-900 capitalize mb-2">Pokemon name</h2>
            <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center bg-gray-100 rounded font-inter font-medium sm:text-sm text-base text-gray-500 pl-1.5 pr-2 py-1 capitalize select-none hover:bg-gray-200 hover:text-gray-600">
                    <Image src={no_image_type} alt="no image type" className="sm:size-7 size-9 me-1" />
                    Type
                </span>
            </div>
            <div className="flex justify-between items-center">
                <span className="inline-flex items-center font-inter font-medium text-gray-600 hover:underline">
                    Read more
                    <svg className="ml-2 size-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </span>
            </div>
        </article>
    )
}

export default CardLoadingCustom