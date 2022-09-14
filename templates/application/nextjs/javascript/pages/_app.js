import App from "next/app";

function MyApp({ Component, pageProps }) {
  console.log("MyApp ------------", pageProps);
  return <Component {...pageProps} lun="1" />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  console.log("MyApp getInitialProps------------", appProps);

  return { ...appProps, MyApp: "MyApp" };
};

export default MyApp;
