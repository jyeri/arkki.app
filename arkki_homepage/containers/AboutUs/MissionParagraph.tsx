import React from "react";
import { useMissionParagraph } from "./useMissionParagraph";
import { MissionParagraphView } from "../../presentational/AboutUs/MissionParagraphView";

interface MissionParagraphProps {
  images: { url: string; alt: string }[];
}

export const MissionParagraph: React.FunctionComponent<MissionParagraphProps> = ({ images }) => {
  const { missionRef, joinRef, journeyRef } = useMissionParagraph();

  return (
    <MissionParagraphView 
      images={images} 
      missionRef={missionRef} 
      joinRef={joinRef} 
      journeyRef={journeyRef} 
    />
  );
};