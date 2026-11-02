import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./shared/ScrollToTop";

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
