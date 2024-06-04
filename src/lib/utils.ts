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
    let pages: number = parseInt((total / 50).toFixed());
    if ((pages * 50) < total) {
        pages += 1;
    }

    for (let index = 1; index <= pages; index++) {
        if (index === 1) {
            pageNumbers.push({ href: '/', number: `${index}` });
        } else {
            pageNumbers.push({ href: `?page=${index}`, number: `${index}` });
        }
    }

    return pageNumbers;
}

export function getOffsetFromProps(props: string | undefined): number {
    if (typeof props === "undefined") {
        return 0;
    } else {
        return (parseInt(props) - 1) * 50;
    }
}

export function getFiltersFromParams(params: string | undefined): string | string[] {
    if (typeof params === "undefined") {
        return '';
    } else if (params.includes("&")) {
        return params.split("&");
    } else {
        return params;
    }
}