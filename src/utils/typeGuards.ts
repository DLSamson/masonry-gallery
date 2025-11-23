import Item from "../interfaces/Item.ts";
import Pony from "../interfaces/Ponies/Pony.ts";
import ItemType from "../interfaces/ItemType.ts";
import Anime from "../interfaces/Anime/Anime.ts";

export const isPonyItem = (item: Item<unknown>): item is Item<Pony> => {
    return item.type === ItemType.pony
}

export const isAnimeItem = (item: Item<unknown>): item is Item<Anime> => {
    return item.type === ItemType.anime
}