import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { loadState } from "../config/storage";
import { Login } from "../pages/Login/login";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = loadState("user");
    const accessToken = user?.accessToken;
console.log(accessToken);

    if (accessToken) {
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Yuklanmoqda...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Login />;
};

export default MainLayout;
