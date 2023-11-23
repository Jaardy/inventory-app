import { Outlet } from "react-router-dom";
import logo from "../../images/logo.jpeg";

export default function MainPage() {
  return (
    <>
      <div className="header-flex">
        <img id="logo" src={logo}></img>
        <h1 className="header">Inventorious</h1>
      </div>
      <Outlet />
    </>
  );
}
