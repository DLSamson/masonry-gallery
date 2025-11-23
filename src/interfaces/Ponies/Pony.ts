import type Sex from "./Sex.ts";
import type Kind from "./Kind.ts";

export default interface Pony {
    id: number;
    name: string;
    alias?: string;
    url: string;
    sex?: Sex;
    residence?: string;
    occupation?: string;
    kind?: Kind[];
    image?: string[];
}