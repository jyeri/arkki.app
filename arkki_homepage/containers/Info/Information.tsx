import React from "react";
import { useInformation } from "./useInformation";
import { InformationView } from "../../presentational/Information/InformationView";

interface InformationProps {
  images: { url: string; alt: string }[];
}

export const Information: React.FunctionComponent<InformationProps> = ({ images }) => {
  const { MarttiRef, JyriRef, NikiRef, RiksuRef, ContactRef } = useInformation();

  return (
    <InformationView
      images={images}
      MarttiRef={MarttiRef}
      JyriRef={JyriRef}
      NikiRef={NikiRef}
      RiksuRef={RiksuRef}
      ContactRef={ContactRef}
    />
  );
};