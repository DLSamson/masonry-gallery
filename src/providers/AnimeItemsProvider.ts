import ItemsProvider, {MasonryItemsProviderLoadParams} from "../interfaces/ItemsProvider.ts";
import Anime from "../interfaces/Anime/Anime.ts";
import Item from "../interfaces/Item.ts";
import axios from "axios";
import ItemType from "../interfaces/ItemType.ts";

const host = 'https://api.nekosia.cat/api/v1';

export default class AnimeItemsProvider implements ItemsProvider<Anime> {
    load(params: MasonryItemsProviderLoadParams): Promise<Item<Anime>[]> {
        return new Promise((resolve, reject) => {
            axios.get<{ images: Anime[] }>(host + '/images/random', {
                params: {
                    count: params.limit
                }
            })
                .then(({data}) => {
                    const images: Item<Anime>[] = data.images.map((anime, index) => ({
                        // data: anime,
                        type: ItemType.anime,
                        image: {
                            src: anime.image.compressed.url,
                            alt: `${anime.id} image ${index + 1}`
                        }
                    }));

                    resolve(images);
                })
                .catch(() => reject);
        });
    }
}