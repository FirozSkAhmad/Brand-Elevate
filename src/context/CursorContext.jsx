// import React, { createContext, useContext, useState } from 'react';

// const CursorContext = createContext();

// export const CursorProvider = ({ children }) => {
//     const [isCursorHovered, setCursorHovered] = useState(false);

//     const value = {
//         isCursorHovered,
//         setCursorHovered,
//     };

//     return (
//         <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
//     );
// };

// export const useCursor = () => {
//     return useContext(CursorContext);
// };
