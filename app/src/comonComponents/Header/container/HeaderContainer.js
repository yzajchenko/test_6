import { useEffect } from "react";

import HeaderLayout from "../components/HeaderLayout";

const HeaderContainer = () => {
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  return <HeaderLayout />;
};

export default HeaderContainer;
