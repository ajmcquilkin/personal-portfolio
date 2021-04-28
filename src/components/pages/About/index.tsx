// import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLayoutEffect, useRef, useState } from 'react';

// import Button from 'components/Button';
// import Header from 'components/layout/Header';

// import { mailtoLink, resumeFileName } from 'utils';
// import mainGalleryImages from 'utils/images';

// import Footer from 'components/layout/Footer';
import styles from './About.module.scss';

interface AboutProps {

}

const About = (): JSX.Element => {
  const imageWidth = 400;
  const imageHeight = 270;

  const router = useRouter();

  const [galleryWidth, setGalleryWidth] = useState<number>();

  const ref = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    setGalleryWidth((ref?.current?.children.length || 0) * ((imageWidth + 6) / 3));
  }, []);

  return (
    <div className={styles.container}>
      {/* <Header
        title="Adam McQuilkin"
        subtitle="Developer, Product Designer"
        description="A passionate Dartmouth College computer science and design student, specializing in web and application development."
        // src="https://res.cloudinary.com/duq3rhnd2/image/upload/v1602266143/Personal%20Portfolio/about_feature_dzmlth.jpg"
        src="https://res.cloudinary.com/duq3rhnd2/image/upload/v1618616789/Personal%20Portfolio/DSC_8321_crop_dlipoe.jpg"
        // src="https://res.cloudinary.com/duq3rhnd2/image/upload/v1618616340/Personal%20Portfolio/DSC_1143_f33uyd.jpg"
        alt="Banff National Park, Canada"
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
        <section className={styles.introContainer}>
          <div className={styles.introFeaturedImage}>
            <Image
              src="https://res.cloudinary.com/duq3rhnd2/image/upload/v1602266134/Personal%20Portfolio/adam_mcquilkin_qszxv1.jpg"
              alt="Adam J McQuilkin"
              width={611}
              height={773}
              layout="intrinsic"
              objectFit="cover"
            />
          </div>

          <div className={styles.introTextContainer}>
            <h2>Hi, my name’s Adam!</h2>
            <h3>Dartmouth College, Class of 2023</h3>
            <p>
              I am a student at Dartmouth College majoring in Computer Science and Engineerining, and minoring in Human-Centered Design.
              I have many passions, and I am proud of my ability to bring widely varied experiences to the projects I work on.
            </p>

            <Button
              colorMode="dark"
              size="large"
              onClick={() => { router.push(mailtoLink); }}
            >
              contact me
            </Button>
          </div>
        </section>

        <section className={styles.workContainer}>
          <div className={styles.workTextContainer}>
            <div className={styles.workh2}>I enjoy working on</div>
            <h2>meaningful projects</h2>
            <p>I love to work on projects that can bring positive change to the lives of others. From my school to search and rescue teams in the mountains, I want to do good in my communities.</p>
            <Button size="large" onClick={() => router.push('/#work-experience-search')}>see my work</Button>
          </div>
        </section>

        <section className={styles.photographyContainer} id="main-photo-gallery">
          <TextBar className={styles.photographyTextContainer}>
            <h2>I love photography</h2>
            <p>Veritatis ipsa laborum ducimus facilis qui. Eveniet et hic quidem rem qui natus aut. Recusandae enim iure qui ab. Labore nulla cumque aliquam et.</p>
          </TextBar>

          <div className={styles.galleryContainer}>
            <div ref={ref} className={styles.galleryScrollContainer} style={{ width: `${galleryWidth}px`, height: `${3 * (imageHeight + 6)}px` }}>
              {mainGalleryImages.map(({ title, subtitle, src }) => (
                <GalleryImage
                  title={title}
                  subtitle={subtitle}
                  src={src}
                  key={src}
                  width={imageWidth}
                  height={imageHeight}
                />
              ))}

            </div>
          </div>
        </section>

        <section className={styles.safetyContainer}>
          <div className={styles.safetyImageContainer}>
            <Image
              src="https://res.cloudinary.com/duq3rhnd2/image/upload/v1602266120/Personal%20Portfolio/certs_vh4p0b.png"
              alt="Wilderness Safety Certification Cards"
              width={600}
              height={420}
              layout="intrinsic"
              objectFit="contain"
            />
          </div>

          <TextBar className={styles.safetyTextContainer}>
            <h2>I keep people safe</h2>
            <p>Veritatis ipsa laborum ducimus facilis qui. Eveniet et hic quidem rem qui natus aut. Recusandae enim iure qui ab. Labore nulla cumque aliquam et.</p>
          </TextBar>
        </section>

        <section className={styles.outdoorsContainer}>
          <TextBar className={styles.outdoorsTextContainer}>
            <h2>I love the outdoors</h2>
            <p>Veritatis ipsa laborum ducimus facilis qui. Eveniet et hic quidem rem qui natus aut. Recusandae enim iure qui ab. Labore nulla cumque aliquam et.</p>
          </TextBar>

          <div className={styles.outdoorsImageContainer}>
            <Image
              src="https://res.cloudinary.com/duq3rhnd2/image/upload/v1602266166/Personal%20Portfolio/gallery/wmnf_1_small_zfwq2y.jpg"
              alt="White Mountains"
              width={600}
              height={420}
              layout="intrinsic"
              objectFit="contain"
            />
            <p>You can often find me hidden away in the woods.</p>
          </div>
        </section>
      </main>

      <Footer /> */}
    </div>
  );
};

export default About;
