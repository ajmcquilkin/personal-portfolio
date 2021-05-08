import { RefObject, useEffect, useState } from 'react';
import styles from './ImageContextMenu.module.scss';

export interface ImageContextMenuProps {
  parentRef: RefObject<HTMLElement>
}

const ImageContextMenu = ({ parentRef }: ImageContextMenuProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [eventX, setEventX] = useState(0);
  const [eventY, setEventY] = useState(0);

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
    setEventX(e.clientX);
    setEventY(e.clientY);
  };

  const handleWindowClick = (e: MouseEvent) => {
    setIsOpen(false);
  };

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    parent.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('click', handleWindowClick);

    // eslint-disable-next-line consistent-return
    return () => {
      parent.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  if (!isOpen) return <div />;

  return (
    <div className={styles.container} style={{ top: eventY, left: eventX }}>
      <p>
        © Adam McQuilkin,
        {' '}
        {(new Date()).getFullYear()}
        , all rights reserved.
      </p>
      <p>This is a copyrighted image, and is not free to use. If you would like to license this image, please contact me.</p>
    </div>
  );
};
export default ImageContextMenu;
