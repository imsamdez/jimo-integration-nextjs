import Script from "next/script";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
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
              j['JIMO_PROJECT_ID'] = "fd1d5891-9c57-44af-bc42-ab2afd2f2f82";
              
              document.getElementsByTagName("head")[0].appendChild(s);
          })(window);`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
