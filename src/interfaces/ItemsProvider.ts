import type Item from "./Item.ts";

export interface MasonryItemsProviderLoadParams {
    limit?: number,
    offset?: number,
}

export default interface ItemsProvider<T> {
    load(params: MasonryItemsProviderLoadParams): Promise<Item<T>[]>
}