import Image from 'next/image';
// import styles from './GalleryImage.module.scss';

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
  <div>
    <div>
      <div>{title}</div>
      <div>{subtitle}</div>
    </div>
    <div>
      <Image
        src={src}
        alt={title}
        width={width}
        height={height}
        layout="intrinsic"
        objectFit="cover"
      />
    </div>
  </div>
);

export default GalleryImage;
