"use server";

import { redirect } from "next/navigation";

const searchParams = new URLSearchParams();

export async function handleFilterChange(key: string, value: string) {
    if (!searchParams.has(key, value)) {
        searchParams.append(key, value);
    } else {
        searchParams.delete(key, value);
    }

    let queryString = searchParams.toString();
    if (queryString !== '') {
        redirect(`/?${queryString}`);
    } else {
        redirect('/');
    }
}