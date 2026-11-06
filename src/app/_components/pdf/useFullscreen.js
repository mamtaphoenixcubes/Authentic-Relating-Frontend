"use client";

import { useCallback, useEffect, useState } from "react";

export default function useFullscreen(containerRef) {

    const [isFullscreen, setIsFullscreen] = useState(false);

    const enterFullscreen = useCallback(async () => {

        if (!containerRef?.current) return;

        try {

            const element = containerRef.current;

            if (element.requestFullscreen) {
                await element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) {
                await element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                await element.msRequestFullscreen();
            }

        } catch (err) {
            console.error("Fullscreen Error:", err);
        }

    }, [containerRef]);

    const exitFullscreen = useCallback(async () => {

        try {

            if (document.fullscreenElement) {
                await document.exitFullscreen();
            } else if (document.webkitFullscreenElement) {
                await document.webkitExitFullscreen();
            } else if (document.msFullscreenElement) {
                await document.msExitFullscreen();
            }

        } catch (err) {
            console.error("Exit Fullscreen Error:", err);
        }

    }, []);

    const toggleFullscreen = useCallback(() => {

        if (document.fullscreenElement) {
            exitFullscreen();
        } else {
            enterFullscreen();
        }

    }, [enterFullscreen, exitFullscreen]);

    useEffect(() => {

        const handleChange = () => {

            setIsFullscreen(!!document.fullscreenElement);

        };

        document.addEventListener(
            "fullscreenchange",
            handleChange
        );

        return () => {

            document.removeEventListener(
                "fullscreenchange",
                handleChange
            );

        };

    }, []);

    return {

        isFullscreen,

        enterFullscreen,

        exitFullscreen,

        toggleFullscreen,

    };

}