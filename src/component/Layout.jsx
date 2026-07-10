import { Outlet } from "react-router-dom";

import Barra from "./Barra";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Barra />

            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;