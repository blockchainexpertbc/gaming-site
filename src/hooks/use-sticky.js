import { useState, useEffect, useRef } from "react";

const useSticky = () => {
    const [totalHeaderHeight, setTotalHeaderHeight] = useState(0);
    const [sticky, setSticky] = useState(false);
    const headerRef = useRef(null);
    const fixedRef = useRef(null);

    useEffect(() => {
        setTotalHeaderHeight(headerRef.current.clientHeight);
    }, [totalHeaderHeight]);

    useEffect(() => {
        const scrollHandler = () => {
            let scrollPos = window.scrollY;
            if (scrollPos > totalHeaderHeight) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [sticky, totalHeaderHeight]);

    return { sticky, headerRef, fixedRef };
};

export default useSticky;
