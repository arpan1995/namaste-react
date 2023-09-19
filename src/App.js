/* eslint-disable react/jsx-no-undef */
import React, { lazy, Suspense } from "react";

import "./App.css";
import Header from "./Component/Header.js";
import Body from "./Component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Component/Error";
import RestaurantMenu from "./Component/RestaurantMenu";
import ContactUs from "./Component/ContactUs";


const About = lazy(() => import("./Component/About"));

export function App() {
  return (
    // <Provider store={appStore}>
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
