import React from "react";
import { ImageGallery } from "../../containers/AboutUs/ImageGallery";
import { MissionParagraph } from "../../containers/AboutUs/MissionParagraph";
import { TeamImages, AboutImages } from "../../assets";
import "../../styles/AboutUs.styles.scss";

export const AboutUsView: React.FunctionComponent = () => (
  <div className="about__container">
    <ImageGallery images={TeamImages} />
    <MissionParagraph images={AboutImages} />
  </div>
);