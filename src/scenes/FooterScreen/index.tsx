import React from 'react';
import Button from '../../components/Button';

import FooterImage from '../../assets/images/footer_feature.jpg';
import './FooterScreen.scss';

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => (
  <footer className={className || ''} style={{ background: `linear-gradient(rgba(54, 54, 54, 0.24), rgba(54, 54, 54, 0.24)), rgba(0, 0, 0, 0) url(${FooterImage}) no-repeat scroll 50% 70%` }}>
    <div className="footer-top-gradient" />

    <div className="footer-main-content">
      <h2>Want to chat? Let me know!</h2>
      <div className="footer-button-container">
        <Button onClick={() => {}} size="sm">contact me</Button>
        <Button onClick={() => {}} size="lg">download resume</Button>
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
