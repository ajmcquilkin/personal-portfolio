import { useRouter } from 'next/router';

import Button from 'components/Button';
import Header from 'components/layout/Header';

import { mailtoLink, resumeFileName } from 'utils';
import Footer from 'components/layout/Footer';
import TextBar from 'components/layout/TextBar';
import Image from 'next/image';

const Home = (): JSX.Element => {
  const router = useRouter();

  return (
    <div>
      <Header
        title="Adam McQuilkin"
        subtitle="Developer, Product Designer"
        description="A passionate Dartmouth College computer science and design student, specializing in web and application development."
        src="https://res.cloudinary.com/duq3rhnd2/image/upload/v1602538908/Personal%20Portfolio/home_feature_2_crop_yeg97j.jpg"
        alt="Montana mountains"
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

      <main>
        <section>
          <div>
            <TextBar>
              <h2>D-Planner, LLC</h2>
              <div className="h4">Co-founder, Product Designer, Developer</div>
              <p>
                Academic planning is difficult for students, especially when information is fragmented and hard to find.
                D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition.
              </p>
              <Button
                colorMode="dark"
                onClick={() => router.push('/story/dplanner')}
              >
                read more
              </Button>
            </TextBar>

            <Image
              src="https://res.cloudinary.com/duq3rhnd2/image/upload/v1602266118/Personal%20Portfolio/test_project_image_lx5fro.png"
              alt="D-Planner display"
              width={450}
              height={360}
              layout="intrinsic"
              objectFit="contain"
            />
          </div>

          <div>
            <Image
              src="https://res.cloudinary.com/duq3rhnd2/image/upload/v1602266120/Personal%20Portfolio/certs_vh4p0b.png"
              alt="Wilderness certification cards"
              width={450}
              height={360}
              layout="intrinsic"
              objectFit="contain"
            />

            <TextBar>
              <h2>D-Planner, LLC</h2>
              <div className="h4">Co-founder, Product Designer, Developer</div>
              <p>
                Academic planning is difficult for students, especially when information is fragmented and hard to find.
                D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition.
              </p>
              <Button
                colorMode="dark"
                onClick={() => router.push('/story/dplanner')}
              >
                read more
              </Button>
            </TextBar>
          </div>
        </section>

        <section>
          Skills
        </section>

        <section>
          Projects
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
