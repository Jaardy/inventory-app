import { Outlet } from "react-router-dom";
import logo from "../../images/logo.jpeg";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/");
  }
  return (
    <>
      <div className="header-flex">
        <img onClick={handleLogoClick} id="logo" src={logo}></img>
        <h1 className="header">Inventorious</h1>
      </div>
      <Outlet />
    </>
  );
}
