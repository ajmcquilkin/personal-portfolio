import { useRouter } from 'next/router';

import Button from 'components/Button';
import Header from 'components/layout/Header';

import { mailtoLink, resumeFileName } from 'utils';

const Fallback = (): JSX.Element => {
  const router = useRouter();

  return (
    <Header
      title="404"
      subtitle="That's an error..."
      description="You seem to be lost in the woods. We couldn’t find the page you were looking for, but give these pages a try!"
      src="/v1602521764/Personal%20Portfolio/404_feature_small_oz6j2o.jpg"
      alt="Black and white mountain trail with woman walking"
      hideArrow
    >
      <Button
        onClick={() => router.push(mailtoLink)}
        className="headerButton"
      >
        contact me
      </Button>

      <Button
        size="large"
        onClick={() => router.push(resumeFileName)}
        className="headerButton"
      >
        download resume
      </Button>
    </Header>
  );
};

export default Fallback;
