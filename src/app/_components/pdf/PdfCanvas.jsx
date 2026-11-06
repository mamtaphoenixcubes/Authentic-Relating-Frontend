"use client";

import { useEffect, useRef } from "react";

export default function PdfCanvas({
    pdf,
    pageNumber,
    scale = 1.4,
    watermarkName = "",
    watermarkEmail = "",
}) {
    const canvasRef = useRef(null);
    const renderTaskRef = useRef(null);

    useEffect(() => {
        if (!pdf) return;

        let cancelled = false;

        const render = async () => {
            try {
                if (renderTaskRef.current) {
                    try {
                        renderTaskRef.current.cancel();
                    } catch { }

                    renderTaskRef.current = null;
                }

                const page = await pdf.getPage(pageNumber);

                if (cancelled) return;

                console.log("Rendering scale:", scale);

                const viewport = page.getViewport({ scale });

                const canvas = canvasRef.current;

                if (!canvas) return;

                const context = canvas.getContext("2d");

                // High DPI rendering
                const outputScale = window.devicePixelRatio || 1;

                canvas.width = Math.floor(viewport.width * outputScale);
                canvas.height = Math.floor(viewport.height * outputScale);

                canvas.style.width = `${viewport.width}px`;
                canvas.style.height = `${viewport.height}px`;

                context.setTransform(
                    outputScale,
                    0,
                    0,
                    outputScale,
                    0,
                    0
                );

                const renderTask = page.render({
                    canvasContext: context,
                    viewport,
                });

                renderTaskRef.current = renderTask;

                await renderTask.promise;

                renderTaskRef.current = null;

                // -----------------------
                // WATERMARK
                // -----------------------

                context.save();

                context.translate(
                    viewport.width / 2,
                    viewport.height / 2
                );

                context.rotate(-Math.PI / 4);

                context.textAlign = "center";
                context.fillStyle = "rgba(0,0,0,.08)";

                const gapX = 350;
                const gapY = 220;

                for (
                    let y = -viewport.height;
                    y < viewport.height;
                    y += gapY
                ) {
                    for (
                        let x = -viewport.width;
                        x < viewport.width;
                        x += gapX
                    ) {
                        context.save();

                        context.translate(x, y);

                        context.font = "bold 22px Arial";
                        context.fillText(
                            "Authentic Relating",
                            0,
                            0
                        );

                        context.font = "18px Arial";
                        context.fillText(
                            "Purchased By",
                            0,
                            35
                        );

                        context.font = "bold 20px Arial";
                        context.fillText(
                            watermarkName || "Guest User",
                            0,
                            70
                        );

                        context.font = "16px Arial";
                        context.fillText(
                            watermarkEmail || "",
                            0,
                            100
                        );

                        context.restore();
                    }
                }

                context.restore();
            } catch (err) {
                if (
                    err?.name ===
                    "RenderingCancelledException"
                ) {
                    return;
                }

                console.error(err);
            }
        };

        render();

        return () => {
            cancelled = true;

            if (renderTaskRef.current) {
                try {
                    renderTaskRef.current.cancel();
                } catch { }

                renderTaskRef.current = null;
            }
        };
    }, [
        pdf,
        pageNumber,
        scale,
        watermarkName,
        watermarkEmail,
    ]);

    return (
        <div
            style={{
                width: "100%",
                overflow: "auto",
                display: "flex",
                justifyContent: "center",
                padding: "24px",
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    display: "block",
                    background: "#fff",
                    borderRadius: 12,
                    boxShadow:
                        "0 20px 50px rgba(0,0,0,.18)",
                    maxWidth: "none",
                }}
            />
        </div>
    );
}