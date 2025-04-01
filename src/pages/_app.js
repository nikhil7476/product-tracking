import { useEffect } from "react";
import TagManager from "react-gtm-module";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const tagManagerArgs = {
  gtmId: "GTM-5LK7ZQSF",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
    console.log("✅ GTM Initialized:", tagManagerArgs.gtmId);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
