"use client";

import { useRef, useState } from "react";
import useFullscreen from "./useFullscreen";

import usePdf from "./usePdf";
import PdfLoader from "./PdfLoader";
import PdfError from "./PdfError";
import PdfCanvas from "./PdfCanvas";
import useKeyboardNavigation from "./useKeyboardNavigation";



import PdfToolbar from "./PdfToolbar";

export default function PdfViewer({

    url,

}) {

    const {

        pdf,

        pages,

        loading,

        error,

    } = usePdf(url);

    const [page, setPage] = useState(1);

    const [scale, setScale] = useState(1.5);

    const containerRef = useRef(null);

    const {

        isFullscreen,

        toggleFullscreen,

    } = useFullscreen(containerRef);

    useKeyboardNavigation({

        page,

        totalPages: pages,

        setPage,

        scale,

        setScale,

        toggleFullscreen,

    });



    if (loading)
        return <PdfLoader />;

    if (error)
        return <PdfError error={error} />;

    return (

        <div
            ref={containerRef}
            style={{
                background: "#0F172A",
                minHeight: "100vh",
                padding: 40,
            }}
        >

            <PdfToolbar

                page={page}

                totalPages={pages}

                scale={scale}

                onScaleChange={setScale}

                fullscreen={isFullscreen}

                onToggleFullscreen={toggleFullscreen}

                onPrev={() =>
                    setPage((p) => Math.max(1, p - 1))
                }

                onNext={() =>
                    setPage((p) => Math.min(pages, p + 1))
                }

            />

            <PdfCanvas
                pdf={pdf}
                pageNumber={page}
                scale={scale}

                watermarkName="Byasadeba Bejera"

                watermarkEmail="byasa@gmail.com"
            />

        </div>

    );

}