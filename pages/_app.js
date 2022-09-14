import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Nick Schroder" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NS | Dev</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
