import React from 'react';

import Button from '../../components/Button';
import ImageTile from '../../components/ImageTile';
import Footer from '../FooterScreen';

import BanffIcon1 from '../../assets/images/gallery/banff_1.jpg';
import BanffIcon2 from '../../assets/images/gallery/banff_2.jpg';
import BanffIcon3 from '../../assets/images/gallery/banff_3.jpg';

import FrancIcon1 from '../../assets/images/gallery/franc_1.jpg';
import FrancIcon2 from '../../assets/images/gallery/franc_2.jpg';

import GileIcon1 from '../../assets/images/gallery/gile_1.jpg';
import GileIcon2 from '../../assets/images/gallery/gile_2.jpg';

import NCNPIcon1 from '../../assets/images/gallery/ncnp_1.jpg';
import NCNPIcon2 from '../../assets/images/gallery/ncnp_2.jpg';

import WMNFIcon1 from '../../assets/images/gallery/wmnf_1.jpg';

import WYIcon1 from '../../assets/images/gallery/wy_1.jpg';
// import WYIcon2 from '../../assets/images/gallery/wy_2.jpg';
import WYIcon3 from '../../assets/images/gallery/wy_3.jpg';

import CertsImage from '../../assets/images/certs.png';
import AdamMcQuilkinImg from '../../assets/images/adam_mcquilkin.jpg';

import { ReactComponent as SlantedBackground } from '../../assets/background.svg';

import './About.scss';

const About = () => {
  const imageWidth = 400;
  const imageHeight = 270;

  const [galleryWidth, setGalleryWidth] = React.useState<number>();

  const ref = React.useRef<HTMLDivElement | null>(null);
  React.useLayoutEffect(() => {
    setGalleryWidth((ref?.current?.children.length || 0) * ((imageWidth + 6) / 3));
  }, [ref.current]);

  return (
    <main>
      <section id="about-intro">
        <img src={AdamMcQuilkinImg} alt="Adam J McQuilkin" />
        <div className="about-intro-text-container">
          <h2>Hi, my name’s Adam!</h2>
          <h3>Dartmouth College, Class of 2023</h3>
          <p>I am a student at Dartmouth College majoring in Computer Science and Engineerining, and minoring in Human-Centered Design. I have many passions, and I am proud of my ability to bring widely varied experiences to the projects I work on.</p>
          <Button size="lg" dark onClick={() => {}}>contact me</Button>
        </div>
      </section>

      <section id="enjoy-projects">
        <div id="about-skills-skew"><SlantedBackground /></div>
        <div className="about-enjoy-text-container">
          <div className="h2">I enjoy working on</div>
          <h2 className="h1">meaningful projects</h2>
          <p>I love to work on projects that can bring positive change to the lives of others. From my school to search and rescue teams in the mountains, I want to do good in my communities.</p>
          <Button size="lg" onClick={() => {}}>see my work</Button>
        </div>
      </section>

      <section id="main-photo-gallery">
        <div className="about-photo-title">
          <h2>I love photography</h2>
          <p>Veritatis ipsa laborum ducimus facilis qui. Eveniet et hic quidem rem qui natus aut. Recusandae enim iure qui ab. Labore nulla cumque aliquam et.</p>
        </div>

        <div id="main-gallery-container">
          <div ref={ref} id="main-gallery-scroll-container" style={{ width: `${galleryWidth}px`, height: `${3 * (imageHeight + 6)}px` }}>
            <ImageTile
              title="Banff National Park"
              subtitle="December, 2019"
              renderImage={(className) => <img src={BanffIcon1} alt="Banff National Park" className={className} />}
              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />
            <ImageTile
              title="Banff National Park"
              subtitle="December, 2019"
              renderImage={(className) => <img src={BanffIcon2} alt="Banff National Park" className={className} />}
              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />
            <ImageTile
              title="Banff National Park"
              subtitle="December, 2019"
              renderImage={(className) => <img src={BanffIcon3} alt="Banff National Park" className={className} />}
              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />

            <ImageTile
              title="Franconia Ridge"
              subtitle="April, 2019"
              renderImage={(className) => <img src={FrancIcon1} alt="Franconia Ridge" className={className} />}
              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />
            <ImageTile
              title="Franconia Ridge"
              subtitle="November, 2019"
              renderImage={(className) => <img src={FrancIcon2} alt="Franconia Ridge" className={className} />}
              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />

            <ImageTile
              title="New Hampshire"
              subtitle="June, 2019"
              renderImage={(className) => <img src={GileIcon1} alt="New Hampshire" className={className} />}
              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />
            <ImageTile
              title="New Hampshire"
              subtitle="June, 2019"
              renderImage={(className) => <img src={GileIcon2} alt=" New Hampshire" className={className} />}
              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />

            <ImageTile
              title="North Cascades"
              subtitle="August, 2019"
              renderImage={(className) => <img src={NCNPIcon1} alt="North Cascades" className={className} />}
              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />
            <ImageTile
              title="North Cascades"
              subtitle="August, 2019"
              renderImage={(className) => <img src={NCNPIcon2} alt="North Cascades" className={className} />}
              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />

            <ImageTile
              title="White Mountains"
              subtitle="July, 2018"
              renderImage={(className) => <img src={WMNFIcon1} alt="White Mountains" className={className} />}
              className="about-image-tile"
            />

            <ImageTile
              title="Wyoming"
              subtitle="August, 2019"
              renderImage={(className) => <img src={WYIcon1} alt="Wyoming" className={className} />}
              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />

            {/* <ImageTile
              title="Wyoming"
              subtitle="August, 2019"
              renderImage={(className) => <img src={WYIcon2} alt="Wyoming" className={className} />}
              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            /> */}

            <ImageTile
              title="Wyoming"
              subtitle="August, 2019"
              renderImage={(className) => <img src={WYIcon3} alt="Wyoming" className={className} />}
              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />
          </div>
        </div>

        <div id="about-gallery-scroll-container">
          <div />
          <p>scroll</p>
          <div />
        </div>
      </section>

      <section id="wilderness-safety">
        <img src={CertsImage} alt="Wilderness Safety Certification Cards" />

        <div className="about-photo-title">
          <h2>I keep people safe</h2>
          <p>Veritatis ipsa laborum ducimus facilis qui. Eveniet et hic quidem rem qui natus aut. Recusandae enim iure qui ab. Labore nulla cumque aliquam et.</p>
        </div>
      </section>

      <section id="outdoors-experience">
        <div className="about-photo-title">
          <h2>I love the outdoors</h2>
          <p>Veritatis ipsa laborum ducimus facilis qui. Eveniet et hic quidem rem qui natus aut. Recusandae enim iure qui ab. Labore nulla cumque aliquam et.</p>
        </div>

        <div id="outdoors-experience-photo-container">
          <img src={WMNFIcon1} alt="White Mountains" />
          <p>You can often find me hidden away in the woods.</p>
        </div>
      </section>

      <Footer className="about-footer" />
    </main>
  );
};

export default About;
