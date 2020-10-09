import React from 'react';
import { LazyLoadImage, trackWindowScroll, LazyLoadImageProps } from 'react-lazy-load-image-component';

import Button from '../../components/Button';
import ImageTile from '../../components/ImageTile';
import Footer from '../FooterScreen';

import { ReactComponent as SlantedBackground } from '../../assets/background.svg';

import './About.scss';

interface IAboutProps extends LazyLoadImageProps {

}

const About = ({ scrollPosition }: IAboutProps) => {
  const imageWidth = 400;
  const imageHeight = 270;

  const [galleryWidth, setGalleryWidth] = React.useState<number>();

  const ref = React.useRef<HTMLDivElement | null>(null);
  React.useLayoutEffect(() => {
    setGalleryWidth((ref?.current?.children.length || 0) * ((imageWidth + 6) / 3));
  }, [ref.current]);

  function generateRenderImage(src:string, alt:string) {
    return function renderImage(className: string) {
      return (
        <LazyLoadImage
          src={src}
          alt={alt}
          width={imageWidth}
          height={imageHeight}

          effect="opacity"
          scrollPosition={scrollPosition}
          wrapperClassName={className}
        />
      );
    };
  }

  return (
    <main>
      <section id="about-intro">
        <LazyLoadImage
          src="https://res.cloudinary.com/duq3rhnd2/image/upload/w_611,h_773/v1602266134/Personal%20Portfolio/adam_mcquilkin_qszxv1.jpg"
          alt="Adam J McQuilkin"
          effect="opacity"
        />
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

              renderImage={generateRenderImage(`https://res.cloudinary.com/duq3rhnd2/image/upload/w_${imageWidth},h_${imageHeight}/v1602266166/Personal%20Portfolio/gallery/banff_1_titzr9.jpg`, 'Banff National Park')}
              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />
            <ImageTile
              title="Banff National Park"
              subtitle="December, 2019"
              renderImage={generateRenderImage(`https://res.cloudinary.com/duq3rhnd2/image/upload/w_${imageWidth},h_${imageHeight}/v1602266166/Personal%20Portfolio/gallery/banff_2_tafput.jpg`, 'Banff National Park')}

              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />
            <ImageTile
              title="Banff National Park"
              subtitle="December, 2019"
              renderImage={generateRenderImage(`https://res.cloudinary.com/duq3rhnd2/image/upload/w_${imageWidth},h_${imageHeight}/v1602266166/Personal%20Portfolio/gallery/banff_3_jg8swn.jpg`, 'Banff National Park')}

              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />

            <ImageTile
              title="Franconia Ridge"
              subtitle="April, 2019"
              renderImage={generateRenderImage(`https://res.cloudinary.com/duq3rhnd2/image/upload/w_${imageWidth},h_${imageHeight}/v1602266166/Personal%20Portfolio/gallery/franc_1_yblpgr.jpg`, 'Franconia Ridge')}

              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />
            <ImageTile
              title="Franconia Ridge"
              subtitle="November, 2019"
              renderImage={generateRenderImage(`https://res.cloudinary.com/duq3rhnd2/image/upload/w_${imageWidth},h_${imageHeight}/v1602266166/Personal%20Portfolio/gallery/franc_2_qtcjjv.jpg`, 'Franconia Ridge')}

              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />

            <ImageTile
              title="New Hampshire"
              subtitle="June, 2019"
              renderImage={generateRenderImage(`https://res.cloudinary.com/duq3rhnd2/image/upload/w_${imageWidth},h_${imageHeight}/v1602266166/Personal%20Portfolio/gallery/gile_1_s3r4rr.jpg`, 'New Hampshire')}

              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />
            <ImageTile
              title="New Hampshire"
              subtitle="June, 2019"
              renderImage={generateRenderImage(`https://res.cloudinary.com/duq3rhnd2/image/upload/w_${imageWidth},h_${imageHeight}/v1602266166/Personal%20Portfolio/gallery/gile_2_lruwvu.jpg`, 'New Hampshire')}

              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />

            <ImageTile
              title="North Cascades"
              subtitle="August, 2019"
              renderImage={generateRenderImage(`https://res.cloudinary.com/duq3rhnd2/image/upload/w_${imageWidth},h_${imageHeight}/v1602266166/Personal%20Portfolio/gallery/ncnp_1_fqejrv.jpg`, 'North Cascades')}

              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />
            <ImageTile
              title="North Cascades"
              subtitle="August, 2019"
              renderImage={generateRenderImage(`https://res.cloudinary.com/duq3rhnd2/image/upload/w_${imageWidth},h_${imageHeight}/v1602266166/Personal%20Portfolio/gallery/ncnp_2_zhnmyt.jpg`, 'North Cascades')}

              width={`${imageWidth}px`}
              height={`${imageHeight}px`}
              className="about-image-tile"
            />

            <ImageTile
              title="White Mountains"
              subtitle="July, 2018"
              renderImage={generateRenderImage(`https://res.cloudinary.com/duq3rhnd2/image/upload/w_${imageWidth},h_${imageHeight}/v1602266166/Personal%20Portfolio/gallery/wmnf_1_small_zfwq2y.jpg`, 'White Mountains')}

              className="about-image-tile"
            />

            <ImageTile
              title="Wyoming"
              subtitle="August, 2019"
              renderImage={generateRenderImage(`https://res.cloudinary.com/duq3rhnd2/image/upload/w_${imageWidth},h_${imageHeight}/v1602266166/Personal%20Portfolio/gallery/wy_1_xrcgbg.jpg`, 'Wyoming')}

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
              renderImage={generateRenderImage(`https://res.cloudinary.com/duq3rhnd2/image/upload/w_${imageWidth},h_${imageHeight}/v1602266166/Personal%20Portfolio/gallery/wy_3_sotj58.jpg`, 'Wyoming')}

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
        <img src="https://res.cloudinary.com/duq3rhnd2/image/upload/w_600,q_70/v1602266166/Personal%20Portfolio/gallery/certs_vh4p0b.jpg" alt="Wilderness Safety Certification Cards" />

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
          <img src="https://res.cloudinary.com/duq3rhnd2/image/upload/w_640/v1602266166/Personal%20Portfolio/gallery/wmnf_1_small_zfwq2y.jpg" alt="White Mountains" />
          <p>You can often find me hidden away in the woods.</p>
        </div>
      </section>

      <Footer className="about-footer" />
    </main>
  );
};

export default trackWindowScroll(About);
