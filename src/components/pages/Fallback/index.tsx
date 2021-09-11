import { useRouter } from 'next/router';

import Button from 'components/Button';
import Header from 'components/layout/Header';

import styles from './Fallback.module.scss';

const Fallback = (): JSX.Element => {
    const router = useRouter();

    return (
        <div style={{ overflow: 'hidden' }}>
            <Header
                title="404"
                subtitle="That's an error..."
                description="You seem to be lost in the woods. We couldn’t find the page you were looking for, but give these pages a try!"
                src="/v1602521764/Personal%20Portfolio/404_feature_small_oz6j2o.jpg"
                alt="Black and white mountain trail with woman walking"
                className={styles.container}
                hideArrow
            >
                <Button
                    onClick={() => router.push('/')}
                    className="headerButton"
                >
                    go home
                </Button>

                <Button
                    size="large"
                    onClick={() => router.push('/stories')}
                    className="headerButton"
                >
                    see my work
                </Button>
            </Header>
        </div>
    );
};

export default Fallback;
