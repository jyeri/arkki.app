import './App.css';
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { SquadBuilder } from './components/SquadBuilder/SquadBuilder';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Info } from './components/Information/Info';
import { Footer } from './components/Footer/Footer';

function App() {
    const [activePage, setActivePage] = useState("About Us");

    const handleMenuItemClick = (page: string) => {
        setActivePage(page);
    };

    return (
        <>
            <Header onMenuItemClick={handleMenuItemClick} />
            {activePage === "About Us" && <AboutUs />}
            {activePage === "Arkki FUT" && <SquadBuilder />}
            {activePage === "INFO" && <Info />}
            <Footer />
        </>
    );
}

export default App;