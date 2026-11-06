"use client";

import { useEffect } from "react";

export default function useKeyboardNavigation({

    page,

    totalPages,

    setPage,

    scale,

    setScale,

    toggleFullscreen,

}) {

    useEffect(() => {

        const onKeyDown = (e) => {

            // Ignore typing inside inputs
            const tag = document.activeElement?.tagName;

            if (
                tag === "INPUT" ||
                tag === "TEXTAREA" ||
                document.activeElement?.isContentEditable
            ) {
                return;
            }

            switch (e.key) {

                case "ArrowRight":

                    setPage((prev) =>
                        Math.min(prev + 1, totalPages)
                    );

                    break;

                case "ArrowLeft":

                    setPage((prev) =>
                        Math.max(prev - 1, 1)
                    );

                    break;

                case "+":

                case "=":

                    setScale((prev) =>
                        Math.min(prev + 0.1, 3)
                    );

                    break;

                case "-":

                    setScale((prev) =>
                        Math.max(prev - 0.1, 0.5)
                    );

                    break;

                case "0":

                    setScale(1.5);

                    break;

                case "f":

                case "F":

                    toggleFullscreen();

                    break;

                default:
                    break;
            }
        };

        window.addEventListener(
            "keydown",
            onKeyDown
        );

        return () => {

            window.removeEventListener(
                "keydown",
                onKeyDown
            );

        };

    }, [

        page,

        totalPages,

        setPage,

        scale,

        setScale,

        toggleFullscreen,

    ]);

}