import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import UnknownPage from "./pages/unknown/UnknownPage";
import ProfilePage from "./pages/profile/ProfilePage";
import UsersPage from "./pages/users/UsersPage";
import DealersPage from "./pages/dealers/DealersPage";
import CarsPage from "./pages/cars/CarsPage";
import RentPage from "./pages/rent/RentPage";
import WrapperPage from "./pages/wrapper/WrapperPage";
import MainPage from "./pages/main/MainPage";
import OrdersPage from "./pages/orders/OrdersPage";
import UserOrdersPage from "./pages/userOrders/UserOrdersPage";
import MyCarPage from "./pages/my-car/MyCarPage";
import BanPage from "./pages/ban/BanPage";
import ProfileDataPage from "./pages/profile/ProfileDataPage";
import ProfileWalletPage from "./pages/profile/wallet/ProfileWalletPage";
import ProfileHistoryPage from "./pages/profile/history/ProfileHistoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="banned" element={<BanPage />} />
        <Route
          path="main"
          element={
            <PrivateRoute>
              <WrapperPage />
            </PrivateRoute>
          }
        >
          <Route index element={<MainPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="dealers" element={<DealersPage />} />
          <Route path="cars" element={<CarsPage />} />
          <Route path="rent" element={<RentPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="my-car" element={<MyCarPage />} />
          <Route path="profile" element={<ProfilePage />}>
            <Route index element={<ProfileDataPage />}/>
            <Route path="wallet" element={<ProfileWalletPage />}/>
            <Route path="history" element={<ProfileHistoryPage />}/>
          </Route>
        </Route>
        <Route path="*" element={<UnknownPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
