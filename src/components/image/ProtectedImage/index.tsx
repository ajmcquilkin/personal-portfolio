import Image, { ImageProps } from 'next/image';
import { useRef, useState } from 'react';

import ImageContextMenu from 'components/image/ImageContextMenu';

import styles from './ProtectedImage.module.scss';

export type ProtectedImageProps = Pick<ImageProps, | 'alt' | 'objectFit' | 'objectPosition' | 'quality' | 'className'> & {
  src: string;
  onLoad?: () => void;
  backgroundColor?: string;
}

const ProtectedImage = ({
  src, alt, objectFit, objectPosition, onLoad,
  backgroundColor = 'transparent', quality = 70, className = ''
}: ProtectedImageProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleLoadingComplete = () => {
    if (onLoad) onLoad();
    setIsLoaded(true);
  };

  return (
    <div
      ref={ref}
      className={[styles.container, className].join(' ')}
      role="presentation"
      style={{ backgroundColor }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        objectPosition={objectPosition}
        quality={quality}
        onLoadingComplete={handleLoadingComplete}
        className={[styles.animation, isLoaded ? styles.loaded : ''].join(' ')}
      />
      <img className={styles.featureImage} src="/feature-image.png" alt={alt} />
      <ImageContextMenu parentRef={ref} />
    </div>
  );
};

export default ProtectedImage;
