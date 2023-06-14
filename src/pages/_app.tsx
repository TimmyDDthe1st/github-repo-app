import type { AppProps } from "next/app";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout repositories={[]}>
      <Component {...pageProps} />
    </Layout>
  );
}
