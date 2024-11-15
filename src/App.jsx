import HeaderTop from "./components/layout/HeaderTop";
import HeaderBottom from "./components/layout/HeaderBottom";
import MainRoutes from "./MainRoutes";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      {/* header */}
      <header>
        <HeaderTop />
        <HeaderBottom />
      </header>

      {/* Main content based on the route */}
      <main>
        <MainRoutes />
      </main>

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
