import React from "react";
import { Information } from "../../containers/Info/Information";
import { BoardImages } from "../../assets";
import "../../styles/Information.styles.scss";

export const InfoView: React.FunctionComponent = () => (
  <div className="information__container">
    <Information images={BoardImages} />
  </div>
);