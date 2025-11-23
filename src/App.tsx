import useStore from "./hooks/useStore.ts";
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import PageLayout from "./layouts/PageLayout.tsx";
import MasonryGallery from "./components/Masonry/MasonryGallery.tsx";
import MasonryItem from "./components/Masonry/MasonryItem.tsx";
import {AnimatePresence} from "framer-motion";
import ModalLayout from "./layouts/ModalLayout.tsx";
import Modal from "./components/Modal/Modal.tsx";
import ModalImage from "./components/Modal/ModalImage.tsx";
import RenderInfoCard from "./components/Modal/RenderInfoCard.tsx";
import {useOnInView} from "react-intersection-observer";

export const App = observer(() => {
    const {masonryStore} = useStore();

    const [item, setItem] = useState<null | NonNullable<typeof masonryStore.items>[number]>();
    useEffect(() => masonryStore.load(), [masonryStore]);

    const ref = useOnInView((inView) => inView && masonryStore.loadMore());

    return (
        <PageLayout scrollable={!item}>
            <MasonryGallery>
                {masonryStore.items?.map((_item, index) =>
                    <MasonryItem
                        id={`card:${_item.image.alt}`}
                        key={_item.image.alt}
                        layoutId={`card:${_item.image.alt}`}
                        onClick={() => setItem(_item)}
                        src={_item.image.src}
                        alt={_item.image.alt}
                        wrapper={{
                            ref: masonryStore.items?.length && masonryStore.items?.length - 10 === index ? ref : null
                        }}
                    />
                )}
            </MasonryGallery>

            <AnimatePresence mode={'popLayout'}>
                {item && (
                    <ModalLayout onClick={() => setItem(null)}>
                        <Modal
                            onClick={(e) => e.stopPropagation()}
                            className={`grid grid-cols-1 ${item.data ? 'md:grid-cols-2' : ''}`}
                        >
                            <ModalImage
                                image={item.image}
                                onClick={() => setItem(null)}
                                className={`cursor-pointer ${item.data ? 'rounded-l-2xl' : 'rounded-2xl'}`}
                            />

                            <RenderInfoCard item={item}/>
                        </Modal>
                    </ModalLayout>
                )}
            </AnimatePresence>
        </PageLayout>
    );
});