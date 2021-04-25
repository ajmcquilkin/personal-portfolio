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
      src="https://res.cloudinary.com/duq3rhnd2/image/upload/q_70,w_2560,h_1493,c_fill/v1602266350/Personal%20Portfolio/404_feature_small_cfwdfz.jpg"
      alt="Page not found featured image"
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
