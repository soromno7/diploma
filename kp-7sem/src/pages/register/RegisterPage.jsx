import "./reg.css";
import registerPic from "./register.svg";
import { Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const [name, setName] = useState();
  const [secondName, setSecondName] = useState();
  const [date, setDate] = useState({});
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const navigate = useNavigate();

  const sessionHandler = (data) => {
    sessionStorage.user = JSON.stringify(data);
  };

  const btnHandler = async () => {
    const user = {
      email: email,
      password: password,
      phone: phone,
      date_of_birth: date,
      first_name: name,
      last_name: secondName,
      role: "user",
      status: "ok",
    };

    await axios
      .post("http://localhost:8080/registration", user)
      .then((res) => sessionHandler(res.data))
      .then(() => {
        navigate("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="loginPageContainer">
        <div className="loginPageData">
          <h2>Регистрация</h2>
          <div className="firstAndLastNameReg">
            <TextField
              id="filled-basic"
              label="Имя"
              variant="filled"
              style={{ backgroundColor: "white", borderRadius: "4px" }}
              onChange={(val) => {
                setName(val.target.value);
              }}
              sx={{
                width: 165,
              }}
              InputProps={{ sx: { height: 52 } }}
            />
            <TextField
              id="filled-basic"
              label="Фамилия"
              variant="filled"
              style={{ backgroundColor: "white", borderRadius: "4px" }}
              onChange={(val) => {
                setSecondName(val.target.value);
              }}
              sx={{
                width: 165,
              }}
              InputProps={{ sx: { height: 52 } }}
            />
          </div>
          <div style={{ backgroundColor: "#ebebeb", borderRadius: "4px" }}>
            <DatePicker
              label="Дата рождения"
              onChange={(val) => {
                setDate(
                  val.$d
                    .toLocaleDateString("en-GB")
                    .replace("/", ".")
                    .replace("/", ".")
                );
              }}
              format="DD.MM.YYYY"
            />
          </div>
          <TextField
            id="filled-basic"
            label="Номер телефона"
            variant="filled"
            style={{ backgroundColor: "white", borderRadius: "4px" }}
            onChange={(val) => {
              setPhone(val.target.value);
            }}
            sx={{
              width: 350,
            }}
            InputProps={{ sx: { height: 52 } }}
          />
          <TextField
            id="filled-basic"
            label="Почта"
            variant="filled"
            style={{ backgroundColor: "white", borderRadius: "4px" }}
            onChange={(val) => {
              setEmail(val.target.value);
            }}
            sx={{
              width: 350,
            }}
            InputProps={{ sx: { height: 52 } }}
          />
          <TextField
            id="filled-basic"
            label="Пароль"
            variant="filled"
            type="password"
            style={{ backgroundColor: "white", borderRadius: "4px" }}
            onChange={(val) => {
              setPassword(val.target.value);
            }}
            sx={{
              width: 350,
            }}
            InputProps={{ sx: { height: 52 } }}
          />
          <TextField
            id="filled-basic"
            label="Подтвердите пароль"
            variant="filled"
            type="password"
            style={{ backgroundColor: "white", borderRadius: "4px" }}
            onChange={(val) => {
              setConfirmPassword(val.target.value);
            }}
            sx={{
              width: 350,
            }}
            InputProps={{ sx: { height: 52 } }}
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "white", color: "black" }}
            onClick={btnHandler}
          >
            Зарегистрироваться
          </Button>
          <span>Уже есть аккаунт?</span>
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            Войти
          </Link>
        </div>
        <img src={registerPic} alt="login pic" style={{ width: "400px" }} />
      </div>
    </LocalizationProvider>
  );
}

export default RegisterPage;
