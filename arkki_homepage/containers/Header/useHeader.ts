import { useState } from "react";

export const useHeader = (onMenuItemClick: (page: string) => void) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activePage, setActivePage] = useState("About Us");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (page: string) => {
    setActivePage(page);
    setIsDropdownOpen(false); // Close the dropdown after selection
    onMenuItemClick(page); // Notify parent component
  };

  return {
    isDropdownOpen,
    activePage,
    toggleDropdown,
    handleMenuItemClick,
  };
};