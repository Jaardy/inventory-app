import React from "react";
import { Homepage } from "./pages/HomePage";
import UpdateItemPage from "./pages/UpdateItemPage";
import { AddNewItem } from "./pages/AddItem";
import Item from "./pages/Item";
import MainPage from "./pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Search } from "./components/Search";

export default router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "add-item", element: <AddNewItem /> },
      { path: ":id", element: <Item /> },
      { path: "search", element: <Search /> },
    ],
  },
]);
