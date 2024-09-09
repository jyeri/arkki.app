import React from "react";
import { useHeader } from "./useHeader";
import { HeaderView } from "../../presentational/Header/HeaderView";

interface HeaderProps {
  onMenuItemClick: (page: string) => void;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ onMenuItemClick }) => {
  const { isDropdownOpen, activePage, toggleDropdown, handleMenuItemClick } = useHeader(onMenuItemClick);

  return (
    <HeaderView
      isDropdownOpen={isDropdownOpen}
      activePage={activePage}
      toggleDropdown={toggleDropdown}
      handleMenuItemClick={handleMenuItemClick}
    />
  );
};