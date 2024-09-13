import "@/styles/globals.css";
import { QueryContextProvider } from "@/store/QueryContext";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
  return (
    <QueryContextProvider>
      <Component {...pageProps} />
      <Toaster
  position="top-center"
  reverseOrder={false}/>
    </QueryContextProvider>
  )
}
