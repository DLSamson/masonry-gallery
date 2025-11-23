import {observer} from "mobx-react-lite";
import useStore from "../hooks/useStore.ts";

export const Header = observer(() => {
    const store = useStore();

    return (
        <div className="sticky top-0 flex h-12 justify-between items-center bg-white px-8 z-40 shadow-sm">
            <div className={'flex flex-nowrap justify-center items-center gap-2'}>
                <img src="favicon.svg" alt="" className="w-fit h-4"/>
                <h1 className="text-black text-xl sm:text-xl">Masonry Gallery</h1>
            </div>

            <div className={'flex gap-4 items-center justify-center'}>
                <div className={'text-base duration-300 hover:bg-gray-300 cursor-pointer px-4 rounded-2xl'}
                     onClick={() => store.changeSource('pony')}>Pony
                </div>
                <div className={'text-base duration-300 hover:bg-gray-300 cursor-pointer px-4 rounded-2xl'}
                     onClick={() => store.changeSource('anime')}>Anime
                </div>
            </div>
        </div>
    )
})