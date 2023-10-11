import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Navigate from react-router-dom
import React, { useState, useEffect } from 'react';
import routes from './Routes';


const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
      const token = localStorage.getItem("login");
      if (token) {
        setIsAuth(true);
        console.log("token", token);
      }
    }, []);
    function routeToRender(route) {
        let componentToRender;

        if (route.Private) {
        componentToRender = isAuth ? <route.component /> : <></>;
        } else {
        componentToRender = <route.component />;
        }
        return componentToRender;
    }
    return (
        <BrowserRouter>
        <Routes>
            {routes.map((route, index) => (
            <Route key={index} path={route.path} element={routeToRender(route)} />
            ))}
        </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
