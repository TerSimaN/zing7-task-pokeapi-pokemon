import Image from "next/image";
import { placeholder_type } from "../../../../public/assets/types";

export default function Loading() {
    return (
        <main className="sm:px-12 lg:px-24 px-4 sm:py-8 py-4 min-h-screen">
            <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-8 max-w-screen-xl animate-pulse">
                <div className="col-span-3 w-full">
                    <div className="bg-gray-300 rounded-full w-60 h-5"></div>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg mt-4">
                        <table className="whitespace-nowrap w-full">
                            <thead>
                                <tr>
                                    <th scope="col" className="min-w-48"></th>
                                    <th scope="col" className="whitespace-nowrap w-full"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="px-6 py-4">
                                        <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="px-6 py-4">
                                        <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="px-6 py-4">
                                        <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="px-6 py-4">
                                        <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="px-6 py-4">
                                        <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="px-6 py-4">
                                        <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    </th>
                                    <td className="px-6 py-4 capitalize">
                                        <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="px-6 py-4">
                                        <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    </th>
                                    <td className="px-6 py-4 capitalize">
                                        <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg mt-6">
                        <table className="whitespace-nowrap w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <td className="p-6">
                                        <div className="flex items-center justify-center size-24 bg-gray-300 rounded">
                                            <svg className="size-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex items-center justify-center size-24 bg-gray-300 rounded">
                                            <svg className="size-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex items-center justify-center size-24 bg-gray-300 rounded">
                                            <svg className="size-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex items-center justify-center size-24 bg-gray-300 rounded">
                                            <svg className="size-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <td className="p-6">
                                        <div className="flex items-center justify-center size-24 bg-gray-300 rounded">
                                            <svg className="size-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex items-center justify-center size-24 bg-gray-300 rounded">
                                            <svg className="size-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex items-center justify-center size-24 bg-gray-300 rounded">
                                            <svg className="size-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex items-center justify-center size-24 bg-gray-300 rounded">
                                            <svg className="size-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8">
                        <div>
                            <button className="w-full" type="button">
                                <h2 className="flex items-center justify-between gap-3 border border-b-0 border-gray-200 rounded-t-xl p-5 w-full hover:bg-gray-100">
                                    <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    <svg className="shrink-0 size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                    </svg>
                                </h2>
                            </button>
                        </div>
                        <div>
                            <button className="w-full" type="button">
                                <h2 className="flex items-center justify-between gap-3 border border-b-0 border-gray-200 p-5 w-full hover:bg-gray-100">
                                    <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    <svg className="shrink-0 size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                    </svg>
                                </h2>
                            </button>
                        </div>
                        <div>
                            <button className="w-full" type="button">
                                <h2 className="flex items-center justify-between gap-3 border border-b-0 border-gray-200 p-5 w-full hover:bg-gray-100">
                                    <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    <svg className="shrink-0 size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                    </svg>
                                </h2>
                            </button>
                        </div>
                        <div>
                            <button className="w-full" type="button">
                                <h2 className="flex items-center justify-between gap-3 border border-b-0 border-gray-200 p-5 w-full hover:bg-gray-100">
                                    <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    <svg className="shrink-0 size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                    </svg>
                                </h2>
                            </button>
                        </div>
                        <div>
                            <button className="w-full" type="button">
                                <h2 className="flex items-center justify-between gap-3 border border-b-0 border-gray-200 p-5 w-full hover:bg-gray-100">
                                    <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    <svg className="shrink-0 size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                    </svg>
                                </h2>
                            </button>
                        </div>
                        <div>
                            <button className="w-full" type="button">
                                <h2 className="flex items-center justify-between gap-3 border border-gray-200 p-5 w-full hover:bg-gray-100">
                                    <div className="bg-gray-300 rounded-full w-24 h-2.5"></div>
                                    <svg className="shrink-0 size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                    </svg>
                                </h2>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 lg:block grid sm:grid-cols-2 grid-cols-1 gap-4 lg:space-y-4 lg:mt-0 mt-4 w-full">
                    <div className="bg-gray-50 border border-gray-100 shadow-md rounded-lg md:p-6 p-4 max-w-full">
                        <div className="bg-gray-200 rounded-full w-24 h-4"></div>
                        <div className="divide-y divide-gray-200 mt-2">
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt>
                                    <div className="bg-gray-200 rounded-full w-24 h-2"></div>
                                </dt>
                                <dd>
                                    <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                </dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt>
                                    <div className="bg-gray-200 rounded-full w-24 h-2"></div>
                                </dt>
                                <dd>
                                    <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                </dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt>
                                    <div className="bg-gray-200 rounded-full w-24 h-2"></div>
                                </dt>
                                <dd>
                                    <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                </dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt>
                                    <div className="bg-gray-200 rounded-full w-24 h-2"></div>
                                </dt>
                                <dd>
                                    <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                </dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt>
                                    <div className="bg-gray-200 rounded-full w-24 h-2"></div>
                                </dt>
                                <dd>
                                    <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                </dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt>
                                    <div className="bg-gray-200 rounded-full w-24 h-2"></div>
                                </dt>
                                <dd>
                                    <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 shadow-md rounded-lg md:p-6 p-4 max-w-full">
                        <div className="bg-gray-200 rounded-full w-24 h-4"></div>
                        <div className="divide-y divide-gray-200 mt-2">
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt className="inline-flex items-center gap-x-2">
                                    <Image src={placeholder_type} alt="placeholder_type" className="sm:size-7 size-9 me-1" />
                                    <div className="bg-gray-200 rounded-full w-9 h-2.5"></div>
                                </dt>
                                <dd>
                                    <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 shadow-md rounded-lg md:p-6 p-4 max-w-full">
                        <div className="bg-gray-200 rounded-full w-24 h-4"></div>
                        <div className="divide-y divide-gray-200 mt-2">
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt>
                                    <div className="bg-gray-200 rounded-full w-24 h-2"></div>
                                </dt>
                                <dd>
                                    <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                </dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt>
                                    <div className="bg-gray-200 rounded-full w-24 h-2"></div>
                                </dt>
                                <dd>
                                    <div className="bg-gray-200 rounded-full w-12 h-2"></div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 shadow-md rounded-lg md:p-6 p-4 max-w-full">
                        <div className="bg-gray-200 rounded-full w-24 h-4"></div>
                        <div className="divide-y divide-gray-200 mt-2">
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt>
                                    <div className="bg-gray-200 rounded-full w-24 h-2"></div>
                                </dt>
                                <dd>
                                    <button className="inline-flex items-center bg-gray-300 rounded-lg px-3 py-2" disabled>
                                        <div className="bg-gray-200 rounded-full w-16 h-2"></div>
                                        <svg className="size-5 text-white ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01" />
                                        </svg>
                                    </button>
                                </dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-4 py-2">
                                <dt>
                                    <div className="bg-gray-200 rounded-full w-24 h-2"></div>
                                </dt>
                                <dd>
                                    <button className="inline-flex items-center bg-gray-300 rounded-lg px-3 py-2" disabled>
                                        <div className="bg-gray-200 rounded-full w-16 h-2"></div>
                                        <svg className="size-5 text-white ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01" />
                                        </svg>
                                    </button>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}