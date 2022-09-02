import Head from "next/head";
import "../styles/globals.css";

import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Maths Activities</title>
        <meta name="description" content="Maths Activities"></meta>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
