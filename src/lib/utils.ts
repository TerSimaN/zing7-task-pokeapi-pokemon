import { types } from "@/config/constants";
import { no_image_type } from "../../public/assets/types";

export function getIconByTypeName(typeName: string) {
    const type = types.find((type) => type.typeName === typeName);
    if (typeof type === "undefined") {
        return { typeName: 'no-icon-type', typeIconSrc: no_image_type, typeIconAlt: 'no_icon_type' };
    }

    return type;
}

export function createPageNumbersArray(total: number) {
    let pageNumbers: { href: string, number: string }[] = [];
    let pages: number = Number.parseInt(((total / 50) + (total % 50)).toFixed());

    for (let index = 1; index < pages; index++) {
        if (index === 1) {
            pageNumbers.push({ href: '/', number: `${index}` });
        } else {
            pageNumbers.push({ href: `?page=${index}`, number: `${index}` });
        }
    }

    return pageNumbers;
}

export function getOffsetFromPage(page: string | undefined): number {
    if (typeof page === "undefined") {
        return 0;
    } else {
        return (Number.parseInt(page) - 1) * 50;
    }
}