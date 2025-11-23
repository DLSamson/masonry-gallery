import {observer} from "mobx-react-lite";
import type {HTMLAttributes, PropsWithChildren} from "react";

const Modal = observer(({className, ...props}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
    <div
        className={`w-full max-w-screen-lg mx-auto cursor-default ${className}`}
        {...props}
    />
));

export default Modal;