import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import React from "react";

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={Router}></RouterProvider>
    </React.StrictMode>
  );
}