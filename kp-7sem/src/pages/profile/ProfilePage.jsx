import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./profile.css";
import { Link, Outlet } from "react-router-dom";

function ProfilePage() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="modal-aside">
          <Link to="" className="modal-aside-item">
            Данные
          </Link>
          <Link to="wallet" className="modal-aside-item">
            Кошелёк
          </Link>
          <Link to="history" className="modal-aside-item">
            История
          </Link>
        </div>
        <Outlet />
      </LocalizationProvider>
    </div>
  );
}

export default ProfilePage;
