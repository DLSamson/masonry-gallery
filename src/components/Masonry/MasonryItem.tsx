import {HTMLMotionProps, motion} from "framer-motion";
import {observer} from "mobx-react-lite";
import {forwardRef, type Ref} from "react";

interface MotionItemProps extends HTMLMotionProps<'img'> {
    wrapper?: HTMLMotionProps<'div'>
}

const MasonryItem = observer(forwardRef((props: MotionItemProps, ref: Ref<HTMLImageElement>) => {
    return (
        <motion.div {...props.wrapper}>
            <motion.img
                className={'cursor-pointer rounded-2xl overflow-hidden w-full'}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                ref={ref}
                {...props}
            />
        </motion.div>
    )
}));

export default MasonryItem;