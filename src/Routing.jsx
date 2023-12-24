import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import CursorEffect from './components/CursorEffect';



const Routing = () => {
    return (
        <>
            <CursorEffect></CursorEffect>
            <Outlet />
        </>
    )
}

export default Routing;