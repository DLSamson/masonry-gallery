import {makeAutoObservable} from "mobx";
import type ItemsProvider from "../interfaces/ItemsProvider.ts";
import Item from "../interfaces/Item.ts";

export default class ItemsStore<T> {
    provider: ItemsProvider<T>
    offset: number = 0;
    limit: number = 20;
    items: Item<T>[] | null = null;
    isLoading: boolean = false;

    constructor(provider: ItemsProvider<T>) {
        makeAutoObservable(this);
        this.provider = provider;
    }

    load() {
        if (this.isLoading)
            return;

        this.isLoading = true;
        this.provider.load({limit: this.limit, offset: this.offset})
            .then((items) => {
                this.items = items;
                this.offset = this.offset + this.limit;
            })
            .finally(() => {
                this.isLoading = false;
            });
    }

    setProvider(provider: ItemsProvider<T>) {
        this.provider = provider;
        this.items = null;
        this.offset = 0;
        this.load();
    }

    loadMore() {
        if (this.isLoading)
            return;

        this.isLoading = true;
        this.provider.load({
            limit: this.limit,
            offset: this.offset,
        })
            .then((items) => {
                this.items = [...this.items ?? [], ...items]
                this.offset = this.offset + this.limit;
            })
            .finally(() => {
                this.isLoading = false;
            });
    }
}