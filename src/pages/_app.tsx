import { AppProps } from "next/app";
import Head from "next/head";
import { HEAD_TITLE_BASE } from "utils";
import "styles/globals.scss";

// eslint-disable-next-line react/jsx-props-no-spreading
const App = ({ Component, pageProps }: AppProps): JSX.Element => (
    <div>
        <Head>
            <title>{HEAD_TITLE_BASE}</title>
            <meta
                name="description"
                content="A passionate Dartmouth College computer science and design student, specializing in web and application development."
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Poppins:wght@200;300;400;600;700&display=swap"
                rel="stylesheet"
            />
        </Head>
        <Component {...pageProps} />
    </div>
);

export default App;
