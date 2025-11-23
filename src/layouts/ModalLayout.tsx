import type {PropsWithChildren} from "react";
import {HTMLMotionProps, motion} from "framer-motion";
import {observer} from "mobx-react-lite";

const ModalLayout = observer(({children, ...props}: PropsWithChildren<HTMLMotionProps<'div'>>) => (
    <motion.div
        initial={{background: 'rgba(0,0,0,0)'}}
        animate={{background: 'rgba(0,0,0,0.6)'}}
        exit={{background: 'rgba(0,0,0,0)', transition: {delay: 0}}}
        transition={{delay: 0.3, duration: 0.3, ease: "easeInOut"}}
        className="fixed inset-0 z-40 grid place-items-center pt-16 pb-32 cursor-pointer h-full overflow-auto"
        {...props}
    >
        {children}
    </motion.div>
));

export default ModalLayout;