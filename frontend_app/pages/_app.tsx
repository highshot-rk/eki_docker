import '../styles/globals.css';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Eikatsu |</title>
      <link rel="shortcut icon" href="/favicon.ico" key="shortcutIcon" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
