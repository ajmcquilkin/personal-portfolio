import React from 'react';

import { mailtoLink, resumeFileName } from '../../constants';
import Button from '../../components/Button';
import './FooterScreen.scss';

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => (
  <footer className={className || ''}>
    <div className="footer-top-gradient" />

    <div className="footer-main-content">
      <h2>Want to chat? Let me know!</h2>
      <div className="footer-button-container">
        <Button onClick={() => window.open(mailtoLink, '_self')} className="footer-button" size="sm">contact me</Button>
        <Button onClick={() => window.open(`/${resumeFileName}`)} className="footer-button" size="lg">download resume</Button>
      </div>
    </div>

    <div className="footer-bottom-info">
      <p>designed and coded with love</p>
      <p>•</p>
      <p>
        © Adam McQuilkin,
        {' '}
        {new Date().getFullYear()}
      </p>
    </div>

    <div className="footer-bottom-gradient" />
  </footer>
);

export default Footer;
