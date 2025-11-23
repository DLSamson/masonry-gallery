import {useContext} from "react";
import {RootStoreContext} from "../stores/RootStore.tsx";

export default function useStore() {
    const rootStore = useContext(RootStoreContext);

    if(!rootStore) {
        throw new Error('RootStore was not provided. Did you forget to wrap an application in RootStoreContextProvider?');
    }

    return rootStore;
}