import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/cards.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
