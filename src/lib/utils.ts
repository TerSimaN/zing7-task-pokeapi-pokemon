import { types } from "@/config/constants";
import { no_image_type } from "../../public/assets/types";

export function getIconByTypeName(typeName: string) {
    const type = types.find((type) => type.typeName === typeName);
    if (typeof type === "undefined") {
        return {typeName: 'no-icon-type', typeIconSrc: no_image_type, typeIconAlt: 'no_icon_type'};
    }

    return type;
}