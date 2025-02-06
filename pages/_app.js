import Footer from "@/Components/moduls/footer/Footer";
import Navbar from "@/Components/moduls/navbar/Navbar";

import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}
