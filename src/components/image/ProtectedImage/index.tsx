import Image, { ImageProps } from 'next/image';
import { useRef } from 'react';

import ImageContextMenu from 'components/image/ImageContextMenu';

import styles from './ProtectedImage.module.scss';

export type ProtectedImageProps = Pick<ImageProps, 'src' | 'alt' | 'objectFit' | 'objectPosition' | 'quality' | 'className'> & {

}

const ProtectedImage = ({
  src, alt, objectFit, objectPosition,
  quality = 70, className = ''
}: ProtectedImageProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={[styles.container, className].join(' ')}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        objectPosition={objectPosition}
        quality={quality}
      />
      <img className={styles.featureImage} src="/feature-image.png" alt="" role="presentation" />
      <ImageContextMenu parentRef={ref} />
    </div>
  );
};

export default ProtectedImage;
