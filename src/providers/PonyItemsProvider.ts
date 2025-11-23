import ItemsProvider, {MasonryItemsProviderLoadParams} from "../interfaces/ItemsProvider.ts";
import type Pony from "../interfaces/Ponies/Pony.ts";
import axios from "axios";
import type Item from "../interfaces/Item.ts";
import ItemType from "../interfaces/ItemType.ts";

const host = 'https://ponyapi.net';

export default class PonyItemsProvider implements ItemsProvider<Pony> {
    load(params: MasonryItemsProviderLoadParams): Promise<Item<Pony>[]> {
        return new Promise((resolve, reject) => {
            axios.get<{ data: Pony[] }>(host + '/v1/character/all', {params})
                .then(({data}) => {
                    const items: Item<Pony>[] = [];
                    data.data.forEach(pony => pony.image?.forEach((image, index) => {
                        const item: Item<Pony> = {
                            data: pony,
                            type: ItemType.pony,
                            image: {
                                src: image,
                                alt: `${pony.name} image ${index + 1}`,
                            },
                        };

                        items.push(item);
                    }));

                    resolve(items);
                })
                .catch(reject);
        });
    }
}