import { useState, useEffect } from "react";

function getBreakPoint(windowWidth) {
    return windowWidth < 768;
}

function IsMobile() {
    const isWindowClient = typeof window === "object";

    const [windowSize, setWindowSize] = useState(
        isWindowClient ? getBreakPoint(window.innerWidth) : undefined
    );

    useEffect(() => {
        function setSize() {
            setWindowSize(getBreakPoint(window.innerWidth));
        }

        if (isWindowClient) {
            window.addEventListener("resize", setSize);

            return () => window.removeEventListener("resize", setSize);
        }
    }, [isWindowClient, setWindowSize]);

    return windowSize;
}

export default IsMobile;
