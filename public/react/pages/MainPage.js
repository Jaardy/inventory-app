import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Inventorious</h1>
      <Outlet />
    </>
  );
}
