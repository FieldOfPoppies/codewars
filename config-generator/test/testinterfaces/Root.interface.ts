import { CustomType } from "./CustomType.interface";
import { OptionalSubType } from "./OptionalSubType.interface";

export interface Root {
    primitiveString: string
    primitiveNumber: number
    customType: CustomType
    optionalField?: number,
    primitiveBoolean: boolean,
    optionalSubType: OptionalSubType
}