import { BrowserRouter, Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import routes from './Routes';
import Dashboard from '../Pages/Dashboard/Dashboard';

export function AppRouter() {
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

  // Access query parameters in the desired component
  const paymentStatusComponent = () => {
    const location = useLocation(); // Move useLocation here
    const queryParams = new URLSearchParams(location.search);
    // clg
    console.log("Query Parameters:", Object.fromEntries(queryParams.entries()));

    // Add your logic here to handle the query parameters

    return <Dashboard />;
  };

  // Integrate Dashboard directly into the route configuration
  const dashboardComponent = () => {
    const { itemPath } = useParams();
  
    return (
      <div>
        {console.log("hi")}
        <Dashboard
          itemPath={itemPath}
          // Add other props as needed
        />
      </div>
    );
  };
  
  

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={routeToRender(route)} />
        ))}
        {/* Add a route for paymentStatus with the desired component */}
        <Route path="/paymentStatus" element={paymentStatusComponent} />
        {/* Integrate Dashboard directly into the route configuration */}
        <Route path="/dashboard/*" element={dashboardComponent} />
      </Routes>
    </BrowserRouter>
  );
}
