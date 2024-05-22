import "./Header.style.scss"
import logo from "./arkki-logo.png"
import whitelogo from "./arkki-logo-white.svg"

export const Header = () => {
    return (
        <div className="HeaderContainer">
            <img src={whitelogo} alt={logo} className="HeaderContainer__logo" />
            <h1 className="HeaderContainer__text">Arkki jalkapallo</h1>
            <div className="HeaderContainer__dropdown">
                <select className="HeaderContainer__dropdown-select" defaultValue="SquadBuilder">
                    <option value="SquadBuilder">Squad Builder</option>
                    <option value="Info">About Us</option>
                </select>
            </div>
        </div>
    );
};