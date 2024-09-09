import { useState } from "react";
import { AppView } from "../presentational/modules/AppView";

export const AppContainer: React.FunctionComponent = () => {
  const [activePage, setActivePage] = useState<string>("About Us");

  const handleMenuItemClick = (page: string) => {
    setActivePage(page);
  };

  return <AppView activePage={activePage} onMenuItemClick={handleMenuItemClick} />;
};