import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
