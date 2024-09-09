import React from "react";
import { MissionParagraphView } from "../../presentational/AboutUs/MissionParagraphView";

interface MissionParagraphProps {
  images: { url: string; alt: string }[];
}

export const MissionParagraph: React.FunctionComponent<MissionParagraphProps> = ({ images }) => {
  return <MissionParagraphView images={images} />;
};