import React from 'react';
import { motion } from "framer-motion";
import "../../styles/Footer.styles.scss";

interface FooterViewProps {
  scrollYProgress: any;
  sponsorImages: { url: string; alt: string }[];
}

export const FooterView: React.FC<FooterViewProps> = ({ scrollYProgress, sponsorImages }) => (
  <motion.div
    className='footer__container'
    initial={{ opacity: 1 }}
    style={{ opacity: scrollYProgress }}
  >
    <div className='footer__container-sponsors'>
      {sponsorImages.map(({ url, alt }) => (
        <img key={alt} src={url} alt={alt} />
      ))}
    </div>
  </motion.div>
);