import { use } from "react";
import BooksPaymentPage from "./BooksPaymentPage";


// ✅ REQUIRED for static export
export async function generateStaticParams() {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/getAllBooks`
        );

        const data = await res.json();

        const books = data?.data?.books || [];

        return books.map((book) => ({
            bookId: book._id, // 👈 IMPORTANT (since route is [bookId])
        }));
    } catch (error) {
        console.error("Error generating book payment params:", error);
        return [];
    }
}

// ✅ Page component
export default function Page({ params }) {
    const { bookId } = use(params) ;

    return <BooksPaymentPage bookId={bookId} />;
}