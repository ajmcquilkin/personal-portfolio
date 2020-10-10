import React from 'react';
import './ImageTile.scss';

interface Props {
  title: string;
  subtitle: string;
  renderImage: (className: string) => JSX.Element;

  width?: string;
  height?: string;
  className?: string;
}

const ImageTile = ({
  title, subtitle, renderImage, width, height, className = '',
}: Props) => (
  <div
    className={`image-tile-container ${className}`}
    style={(width && height && { width, height }) || {}}
  >
    <div className="image-tile-text-container">
      <div className="image-tile-title">{title}</div>
      <div className="image-tile-subtitle">{subtitle}</div>
    </div>

    <div className="image-tile-image-container">
      {renderImage('image-tile-image')}
    </div>
  </div>
);
export default ImageTile;
