import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';  
import Home from "./pages/Home.jsx";
import Matchup from "./pages/Matchup.jsx";


const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index={true} path="/" element={<Home />} />
      <Route path="/matchup/:allyChampion/:enemyChampion" element={<Matchup />} />
    </Route>
  )
  )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
