import Image from 'next/image';
import styles from './GalleryImage.module.scss';

export interface GalleryImageProps {
  title: string,
  subtitle: string,
  src: string,

  width?: number,
  height?: number
}

const GalleryImage = ({
  title, subtitle, src,
  width = 400, height = 270
}: GalleryImageProps): JSX.Element => (
  <div className={styles.container} style={{ minWidth: width, height }}>
    <div className={styles.textContainer}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>

    <div className={styles.imageContainer}>
      <Image
        src={src}
        alt={title}
        width={width}
        height={height}
        layout="fixed"
        objectFit="cover"
        className={styles.image}
      />
    </div>
  </div>
);

export default GalleryImage;
