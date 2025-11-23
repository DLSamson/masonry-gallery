import type Image from "./Image.ts";
import ItemType from "./ItemType.ts";

export default interface Item<T> {
    image: Image,
    type: ItemType
    data?: T
}