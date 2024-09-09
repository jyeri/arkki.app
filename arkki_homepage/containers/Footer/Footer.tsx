import React from 'react';
import { useFooter } from './useFooter';
import { FooterView } from '../../presentational/Footer/FooterView';
import { SponsorImages } from '../../assets/index';

export const Footer: React.FC = () => {
  const { scrollYProgress } = useFooter();

  return <FooterView scrollYProgress={scrollYProgress} sponsorImages={SponsorImages} />;
};