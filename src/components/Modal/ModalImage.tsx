import {observer} from "mobx-react-lite";
import {HTMLMotionProps, motion} from "framer-motion";
import type Image from "../../interfaces/Image.ts";

interface ModalImageProps extends HTMLMotionProps<'img'> {
    image: Image,
}

const ModalImage = observer(({image, className, ...props}: ModalImageProps) => (
    <motion.img
        transition={{delay: 0}}
        layoutId={`card:${image.alt}`}
        src={image.src}
        alt={image.alt}
        className={`w-full h-full object-cover object-top z-50 overflow-hidden rounded-l-2xl ${className}`}
        {...props}
    />
));

export default ModalImage;