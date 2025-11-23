import {makeAutoObservable} from "mobx";
import {createContext, type PropsWithChildren} from "react";
import ItemsStore from "./ItemsStore.ts";
import PonyItemsProvider from "../providers/PonyItemsProvider.ts";
import AnimeItemsProvider from "../providers/AnimeItemsProvider.ts";

export default class RootStore {
    masonryStore: ItemsStore<unknown>;
    providers = {
        pony: new PonyItemsProvider(),
        anime: new AnimeItemsProvider(),
    };

    constructor() {
        makeAutoObservable(this);

        const initialProvider = this.providers.pony;
        this.masonryStore = new ItemsStore(initialProvider);
    }

    changeSource(sourceName: keyof typeof this.providers) {
        const newProvider = this.providers[sourceName];

        if (newProvider) {
            this.masonryStore.setProvider(newProvider);
        } else {
            console.error(`Provider with source name ${sourceName} was not found!`);
        }
    }
}

const RootStoreContext = createContext<null | RootStore>(null);

const rootStore = new RootStore();
const RootStoreContextProvider = ({children}: PropsWithChildren) => (
    <RootStoreContext.Provider value={rootStore} children={children}/>
);

export {
    RootStoreContext,
    RootStoreContextProvider
}