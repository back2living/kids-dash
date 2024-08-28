import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {Toaster} from "react-hot-toast";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {useState} from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>
    <Toaster/>
    <Component {...pageProps} />
  </QueryClientProvider>;
}
