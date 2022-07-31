import { AppProps } from 'next/app';
import Head from 'next/head';
import { HEAD_TITLE_BASE } from 'utils';
import 'styles/globals.scss';

// eslint-disable-next-line react/jsx-props-no-spreading
const App = ({ Component, pageProps }: AppProps): JSX.Element => (
    <div>
        <Head>
            <title>{HEAD_TITLE_BASE}</title>
            <meta name="description" content="A passionate Dartmouth College computer science and design student, specializing in web and application development." />
        </Head>
        <Component {...pageProps} />
    </div>
);

export default App;
