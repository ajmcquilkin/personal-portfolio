import * as React from 'react';
import './StoryCallout.scss';

export interface IStoryCalloutProps {
  content: string;
  className?: string;
}

export default function StoryCallout({ content, className }: IStoryCalloutProps) {
  return (<div className={`story-callout-container ${className}`}>{`${content} ”`}</div>);
}
