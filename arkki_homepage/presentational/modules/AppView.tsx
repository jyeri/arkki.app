import React from "react";
import { Header } from "../../containers/Header/Header";
import { SquadBuilder } from "../../containers/SquadBuilder/SquadBuilder";
import { AboutUs } from "../../containers/AboutUs/AboutUs";
import { Info } from "../../containers/Info/Info";
import { Footer } from "../../containers/Footer/Footer";
import "../../styles/App.css";

interface IAppViewProps {
  activePage: string;
  onMenuItemClick: (page: string) => void;
}

export const AppView: React.FunctionComponent<IAppViewProps> = ({ activePage, onMenuItemClick }) => (
  <>
    <Header onMenuItemClick={onMenuItemClick} />
    {activePage === "About Us" && <AboutUs />}
    {activePage === "Arkki FUT" && <SquadBuilder />}
    {activePage === "INFO" && <Info />}
    <Footer />
  </>
);