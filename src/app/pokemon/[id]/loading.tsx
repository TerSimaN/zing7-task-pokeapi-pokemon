import Image from "next/image";
import { no_image } from "../../../../public/assets/images";
import DownloadButton from "@/components/ui/DownloadButton";
import { no_image_type } from "../../../../public/assets/types";
import AccordionHeader from "@/components/ui/AccordionHeader";

export default function Loading() {
    return (
        <main className="sm:px-12 lg:px-24 px-4 sm:py-8 py-4 min-h-screen">
            <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-8 max-w-screen-xl">
                <div className="col-span-3 w-full">
                    <h2 className="font-inter font-semibold sm:text-2xl text-xl text-gray-900">Pokemon description</h2>
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
                                        name
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                                        Base experience
                                    </th>
                                    <td className="px-6 py-4">
                                        0
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                                        Location area encounters
                                    </th>
                                    <td className="px-6 py-4">
                                        N/A
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                                        Height
                                    </th>
                                    <td className="px-6 py-4">
                                        0
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                                        Weight
                                    </th>
                                    <td className="px-6 py-4">
                                        0
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                                        Is default
                                    </th>
                                    <td className="px-6 py-4 capitalize">
                                        N/A
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                                        Order
                                    </th>
                                    <td className="px-6 py-4">
                                        0
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
                                            src={no_image}
                                            alt="no image"
                                            width={96}
                                            height={96}
                                            className="hover:scale-150"
                                        />
                                    </td>
                                    <td className="p-6">
                                        <Image
                                            src={no_image}
                                            alt="no image"
                                            width={96}
                                            height={96}
                                            className="hover:scale-150"
                                        />
                                    </td>
                                    <td className="p-6">
                                        <Image
                                            src={no_image}
                                            alt="no image"
                                            width={96}
                                            height={96}
                                            className="hover:scale-150"
                                        />
                                    </td>
                                    <td className="p-6">
                                        <Image
                                            src={no_image}
                                            alt="no image"
                                            width={96}
                                            height={96}
                                            className="hover:scale-150"
                                        />
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <td className="p-6">
                                        <Image
                                            src={no_image}
                                            alt="no image"
                                            width={96}
                                            height={96}
                                            className="hover:scale-150"
                                        />
                                    </td>
                                    <td className="p-6">
                                        <Image
                                            src={no_image}
                                            alt="no image"
                                            width={96}
                                            height={96}
                                            className="hover:scale-150"
                                        />
                                    </td>
                                    <td className="p-6">
                                        <Image
                                            src={no_image}
                                            alt="no image"
                                            width={96}
                                            height={96}
                                            className="hover:scale-150"
                                        />
                                    </td>
                                    <td className="p-6">
                                        <Image
                                            src={no_image}
                                            alt="no image"
                                            width={96}
                                            height={96}
                                            className="hover:scale-150"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8">
                        <div>
                            <button className="w-full" type="button">
                                <AccordionHeader text="Abilities" isOpen={false} className="border-b-0 rounded-t-xl" />
                            </button>
                        </div>
                        <div>
                            <button className="w-full" type="button">
                                <AccordionHeader text="Forms" isOpen={false} />
                            </button>
                        </div>
                        <div>
                            <button className="w-full" type="button">
                                <AccordionHeader text="Game indices" isOpen={false} />
                            </button>
                        </div>
                        <div>
                            <button className="w-full" type="button">
                                <AccordionHeader text="Held items" isOpen={false} />
                            </button>
                        </div>
                        <div>
                            <button className="w-full" type="button">
                                <AccordionHeader text="Moves" isOpen={false} />
                            </button>
                        </div>
                        <div>
                            <button className="w-full" type="button">
                                <AccordionHeader text="Past types" isOpen={false} className="border-b" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 lg:block grid sm:grid-cols-2 grid-cols-1 gap-4 lg:space-y-4 lg:mt-0 mt-4 w-full">
                    <div className="bg-gray-50 border border-gray-100 shadow-md rounded-lg md:p-6 p-4 max-w-full">
                        <h2 className="font-inter font-semibold text-xl text-gray-900">Stats</h2>
                        <div className="divide-y divide-gray-200 mt-2">
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt className="font-inter font-medium text-sm text-gray-900 capitalize">hp</dt>
                                <dd className="font-inter font-normal text-sm text-gray-500">0</dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt className="font-inter font-medium text-sm text-gray-900 capitalize">attack</dt>
                                <dd className="font-inter font-normal text-sm text-gray-500">0</dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt className="font-inter font-medium text-sm text-gray-900 capitalize">defense</dt>
                                <dd className="font-inter font-normal text-sm text-gray-500">0</dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt className="font-inter font-medium text-sm text-gray-900 capitalize">special-attack</dt>
                                <dd className="font-inter font-normal text-sm text-gray-500">0</dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt className="font-inter font-medium text-sm text-gray-900 capitalize">special-defense</dt>
                                <dd className="font-inter font-normal text-sm text-gray-500">0</dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt className="font-inter font-medium text-sm text-gray-900 capitalize">speed</dt>
                                <dd className="font-inter font-normal text-sm text-gray-500">0</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 shadow-md rounded-lg md:p-6 p-4 max-w-full">
                        <h2 className="font-inter font-semibold text-xl text-gray-900">Types</h2>
                        <div className="divide-y divide-gray-200 mt-2">
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt className="inline-flex items-center gap-x-2 font-inter font-medium text-sm text-gray-900 capitalize">
                                    <Image src={no_image_type} alt="no_image_type" className="lg:size-8 size-6" />
                                    Type
                                </dt>
                                <dd className="font-inter font-normal text-sm text-gray-500">Slot 0</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 shadow-md rounded-lg md:p-6 p-4 max-w-full">
                        <h2 className="font-inter font-semibold text-xl text-gray-900">Species</h2>
                        <div className="divide-y divide-gray-200 mt-2">
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt className="font-inter font-medium text-sm text-gray-900 capitalize">Name</dt>
                                <dd className="font-inter font-normal text-sm text-gray-500 capitalize">name</dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt className="font-inter font-medium text-sm text-gray-900 capitalize">Url</dt>
                                <dd className="font-inter font-normal text-sm text-gray-500 hover:underline">N/A</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 shadow-md rounded-lg md:p-6 p-4 max-w-full">
                        <h2 className="font-inter font-semibold text-xl text-gray-900">Cries</h2>
                        <div className="divide-y divide-gray-200 mt-2">
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt className="font-inter font-medium text-sm text-gray-900 capitalize">Latest</dt>
                                <dd className="font-inter font-normal text-sm text-gray-500">
                                    <DownloadButton href="#" />
                                </dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt className="font-inter font-medium text-sm text-gray-900 capitalize">Legacy</dt>
                                <dd className="font-inter font-normal text-sm text-gray-500">
                                    <DownloadButton href="#" />
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}