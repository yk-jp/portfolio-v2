import { FC } from "react";

import Header from "../header";
import { layoutProps } from "../../interface/props";

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
