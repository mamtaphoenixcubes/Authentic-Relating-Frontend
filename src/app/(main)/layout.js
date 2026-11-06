import Footer from "../_components/layout/Footer";
import Header from "../_components/layout/Header";
import { Toaster } from "react-hot-toast";

export default function WithLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#ffff]">
      <div className="overlay-header">
        <Header />
      </div>

      <main>{children}</main>

      <Footer />

      <Toaster position="top-right" />
    </div>
  );
}