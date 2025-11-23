import type {HTMLAttributes, PropsWithChildren} from "react";
import Masonry from "react-masonry-css";

interface MasonryGalleryProps extends HTMLAttributes<HTMLDivElement> {
    breakpointCols?: typeof Masonry.prototype.props.breakpointCols;
}

export default function MasonryGallery({
                                           children,
                                           className,
                                           breakpointCols,
                                           ...props
                                       }: PropsWithChildren<MasonryGalleryProps>) {
    return (
        <div className={`pt-8 px-2 sm:px-8 ${className ?? ''}`}>
            <Masonry
                breakpointCols={breakpointCols ?? {
                    default: 7,
                    1280: 5,
                    1024: 4,
                    768: 3,
                    500: 2,
                    320: 1,
                }}
                className={'flex gap-4 items-start'}
                columnClassName={'grid gap-4'}
                {...props}
            >
                {children}
            </Masonry>
        </div>
    )
}