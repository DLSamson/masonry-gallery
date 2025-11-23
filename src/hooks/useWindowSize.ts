import {useEffect, useState} from "react";

export default function useWindowSize() {
    const [currentSize, setCurrentSize] = useState<number>(window.innerWidth);

    const handleResize = (event: Event) => {
        const target = event.target as Window;
        setCurrentSize(target.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    });

    return currentSize;
}