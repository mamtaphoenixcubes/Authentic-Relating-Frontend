'use client';

import dynamic from "next/dynamic";

const BookReader = dynamic(() => import("./BookReader"), { ssr: false });

export default function BookReaderClient({ bookId }) {
    return <BookReader bookId={bookId} />;
}
