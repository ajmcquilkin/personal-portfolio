import * as React from 'react';
import './StoryImage.scss';

export interface IStoryImageProps {
  renderImage: (className: string) => void;
  caption: string;
  className?: string
}

export default function StoryImage({ renderImage, caption, className }: IStoryImageProps) {
  return (
    <div className={`story-image-container ${className || ''}`}>
      {renderImage('story-image-image')}
      <p>{caption}</p>
    </div>
  );
}
