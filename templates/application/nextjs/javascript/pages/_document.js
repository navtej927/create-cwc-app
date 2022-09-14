import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    console.log("_document getInitialProps----------");
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => (props) => {
          console.log("enhance app==", props);
          return <App {...props} />;
        },
        enhanceComponent: (Component) => (props) => {
          console.log("enhanceComponent app==", props);
          return <Component {...props} />;
        },
        // Useful for wrapping in a per-page basis
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, doc: "doc" };
  }

  render() {
    console.log("MyDocument ------ ");

    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
