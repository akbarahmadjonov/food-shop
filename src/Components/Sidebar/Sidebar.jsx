  // Images
import Logo from "../../assets/images/Logo.svg";
import HomeDes from "../../assets/images/Home.svg";
import DiscountDes from "../../assets/images/Discount.svg";
import DashboardDes from "../../assets/images/Dashboard.svg";
import SmsDes from "../../assets/images/Message.svg";
import AlertDes from "../../assets/images/Notification.svg";
import SettingsDes from "../../assets/images/Setting.svg";
import LogoutDes from "../../assets/images/Log Out.svg";

import { Sidebarc } from "./Sidebar.styled";
import { GlobalStyles } from "../Styles/GlobalStyle";
import { NavUl } from "./Sidebar.styled";
import { NavLi } from "./Sidebar.styled";
import { SideLogo } from "./Sidebar.styled";
import { Img } from "./Sidebar.styled";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Sidebarc>
        <SideLogo>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </SideLogo>
        <NavUl>
          <NavLi>
            <Link to="/">
              <Img src={HomeDes} alt="home" />
            </Link>
          </NavLi>
          <NavLi>
            <Link to="/discount">
              <Img src={DiscountDes} alt="discount" />
            </Link>
          </NavLi>
          <NavLi>
            <Link to="/dashboard">
              <Img src={DashboardDes} alt="dashboard" />
            </Link>
          </NavLi>
          <NavLi>
            <Link to="/sms">
              <Img src={SmsDes} alt="sms" />
            </Link>
          </NavLi>
          <NavLi>
            <Link to="/alert">
              <Img src={AlertDes} alt="alert" />
            </Link>
          </NavLi>
          <NavLi>
            <Link to="/settings">
              <Img src={SettingsDes} alt="settings" />
            </Link>
          </NavLi>
          <NavLi>
            <Link href="/logout">
              <Img src={LogoutDes} alt="Logout" />
            </Link>
          </NavLi>
        </NavUl>
      </Sidebarc>
    </>
  );
};
