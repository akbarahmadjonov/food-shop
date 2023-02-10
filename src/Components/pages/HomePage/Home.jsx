import { Routes, Route } from "react-router-dom";
import { Homepage } from "../../pages/HomePage/Homepage";
import { Discount } from "../../pages/Discount/Discount";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { Sms } from "../../pages/Sms/Sms";
import { Alert } from "../../pages/Alert/Alert";
import { Settings } from "../../pages/Settings/Settings";
import { Logout } from "../../pages/Logout/Logout";

export const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sms" element={<Sms />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};
