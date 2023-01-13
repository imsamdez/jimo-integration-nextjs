import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleHashChange = (url, { shallow }) => {
      window.jimo.push(["do", "boosted:hash-change"]);
    };

    router.events.on("hashChangeComplete", handleHashChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("hashChangeComplete", handleHashChange);
    };
  }, []);

  return (
    <>
      <Script
        id="jimo-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.jimo = [];
          (function(j,i,m,o) {
              var s = document.createElement("script");
      
              s.type = "text/javascript";
              s.async = true;
              s.src = "https://undercity.usejimo.com/jimo-invader.js";
              j['JIMO_PROJECT_ID'] = "YOUR_PROJECT_ID";
              
              document.getElementsByTagName("head")[0].appendChild(s);
          })(window);`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
