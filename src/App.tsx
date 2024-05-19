import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import InboxPage from "./pages/InboxPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import HelpPage from "./pages/HelpPage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="w-screen h-screen flex flex-row">
          <Sidebar selectedPage={"profile"} />
          <div className="flex flex-col w-full h-full justify-start">
            <NavBar />
            <ProfilePage />
          </div>
        </div>
      ),
    },
    {
      path: "/inbox",
      element: (
        <div className="w-screen h-screen flex flex-row">
          <Sidebar selectedPage={"inbox"} />
          <div className="flex flex-col w-full h-full justify-start">
            <NavBar />
            <InboxPage />
          </div>
        </div>
      ),
    },
    {
      path: "/analytics",
      element: (
        <div className="w-screen h-screen flex flex-row">
          <Sidebar selectedPage={"analytics"} />
          <div className="flex flex-col w-full h-full justify-start">
            <NavBar />
            <AnalyticsPage />
          </div>
        </div>
      ),
    },
    {
      path: "/help",
      element: (
        <div className="w-screen h-screen flex flex-row">
          <Sidebar selectedPage={"help"} />
          <div className="flex flex-col w-full h-full justify-start">
            <NavBar />
            <HelpPage />
          </div>
        </div>
      ),
    },
    {
      path: "/login",
      element: (
        <div className="w-screen h-screen flex flex-row">
          <LoginPage />
        </div>
      ),
    },
  ]);

  return (
    <div className="w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
