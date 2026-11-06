import { useCallback, useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export default function usePdf(url) {

    const [pdf, setPdf] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const [pages, setPages] = useState(0);

    const loadPdf = useCallback(async () => {

        if (!url) return;

        try {

            setLoading(true);

            setError(null);

            const loadingTask = pdfjsLib.getDocument({
                url,
                withCredentials: false,
            });

            const document = await loadingTask.promise;

            setPdf(document);

            setPages(document.numPages);

        } catch (err) {

            console.error(err);

            setError(err);

        } finally {

            setLoading(false);

        }

    }, [url]);

    useEffect(() => {

        loadPdf();

    }, [loadPdf]);

    return {

        pdf,

        pages,

        loading,

        error,

        reload: loadPdf,

    };

}