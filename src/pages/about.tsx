import Image from 'next/image';
import { useRouter } from 'next/router';

import Menu from 'components/layout/Menu';
import Button from 'components/Button';

import { mailtoLink } from 'utils';
import mainGalleryImages from 'utils/images';
import GalleryImage from 'components/GalleryImage';

interface AboutProps {

}

const About = (): JSX.Element => {
  const router = useRouter();

  return (
    <div>
      <header>TODO</header>
      <Menu />

      <main>
        <section>
          <div style={{ width: '600px' }}>
            <Image
              src="https://res.cloudinary.com/duq3rhnd2/image/upload/v1602266134/Personal%20Portfolio/adam_mcquilkin_qszxv1.jpg"
              alt="Adam J McQuilkin"
              width={611}
              height={773}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          <div>
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

        <section>
          <div>image here</div>
          <div>
            <div>I enjoy working on</div>
            <h2>meaningful projects</h2>
            <p>I love to work on projects that can bring positive change to the lives of others. From my school to search and rescue teams in the mountains, I want to do good in my communities.</p>
            <Button size="large" onClick={() => router.push('/#work-experience-search')}>see my work</Button>
          </div>
        </section>

        <section>
          <div>
            <h2>I love photography</h2>
            <p>asdfkjasdklfjasl;dkfj</p>
          </div>
          <div>
            <div>
              {mainGalleryImages.map(({ title, subtitle, src }) => (
                <GalleryImage
                  title={title}
                  subtitle={subtitle}
                  src={src}
                  key={src}
                />
              ))}

            </div>
          </div>
        </section>

        <section>
          <div style={{ width: '600px' }}>
            <Image
              src="https://res.cloudinary.com/duq3rhnd2/image/upload/v1602266120/Personal%20Portfolio/certs_vh4p0b.png"
              alt="Wilderness Safety Certification Cards"
              width={600}
              height={420}
              layout="responsive"
              objectFit="contain"
            />
          </div>

          <div>
            <h2>I keep people safe</h2>
            <p>Veritatis ipsa laborum ducimus facilis qui. Eveniet et hic quidem rem qui natus aut. Recusandae enim iure qui ab. Labore nulla cumque aliquam et.</p>
          </div>
        </section>

        <section>
          <div>
            <h2>I love the outdoors</h2>
            <p>Veritatis ipsa laborum ducimus facilis qui. Eveniet et hic quidem rem qui natus aut. Recusandae enim iure qui ab. Labore nulla cumque aliquam et.</p>
          </div>

          <div style={{ width: '600px' }}>
            <Image
              src="https://res.cloudinary.com/duq3rhnd2/image/upload/v1602266166/Personal%20Portfolio/gallery/wmnf_1_small_zfwq2y.jpg"
              alt="White Mountains"
              width={600}
              height={420}
              layout="responsive"
              objectFit="cover"
            />
            <p>You can often find me hidden away in the woods.</p>
          </div>
        </section>
      </main>

      <footer>TODO</footer>
    </div>
  );
};

export default About;
