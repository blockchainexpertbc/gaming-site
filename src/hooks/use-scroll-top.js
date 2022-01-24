import { useState, useEffect } from "react";

const useScrollTop = () => {
    const [stick, setStick] = useState(false);

    useEffect(() => {
        var position = window.pageYOffset;
        let active = true;

        const scrollHandler = () => {
            let scrollPos = window.pageYOffset;
            if (scrollPos < 200) {
                setStick(false);
            } else if (scrollPos < position) {
                setStick(true);
            } else {
                setStick(false);
            }
            position = scrollPos;
        };
        if (active) {
            window.addEventListener("scroll", scrollHandler);
        }
        return () => {
            active = false;
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [stick]);

    return stick;
};

export default useScrollTop;
