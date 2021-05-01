import Image, { ImageProps } from 'next/image';
import styles from './ProtectedImage.module.scss';

export type ProtectedImageProps = Pick<ImageProps, 'src' | 'alt' | 'objectFit' | 'objectPosition' | 'quality' | 'className'> & {

}

const ProtectedImage = ({
  src, alt, objectFit, objectPosition,
  quality = 70, className = ''
}: ProtectedImageProps): JSX.Element => (
  <div className={[styles.container, className].join(' ')}>
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit={objectFit}
      objectPosition={objectPosition}
      quality={quality}
    />
  </div>
);

export default ProtectedImage;
