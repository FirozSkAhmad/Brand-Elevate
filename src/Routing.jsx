import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import CursorEffect from './components/CursorEffect';
// import { ScrollRestoration } from "react-router-dom";

// import ScrollToTop from './components/ScrollToTop';



const Routing = () => {
    return (
        <>
            {/* <ScrollToTop></ScrollToTop> */}
            <CursorEffect></CursorEffect>
            {/* <ScrollRestoration
                getKey={(location, matches) => {
                    return location.pathname;
                }}
            /> */}

            <Outlet />

        </>
    )
}

export default Routing;