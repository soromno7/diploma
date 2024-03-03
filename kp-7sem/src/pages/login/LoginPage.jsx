import "./log.css";
import loginPic from "./login.svg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const sessionHandler = (data) => {
    sessionStorage.user = JSON.stringify(data);
  };

  const btnHandler = async () => {
    const user = {
      email: email,
      password: password,
    };

    await axios
      .post("http://localhost:8080/login", user)
      .then((res) => {
        sessionHandler(res.data);
      })
      .then(() => {
        navigate("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="loginPageContainer">
      <img src={loginPic} alt="login pic" style={{ width: "400px" }} />
      <div className="loginPageData">
        <h2>Авторизация</h2>
        <TextField
          id="filled-basic"
          label="Почта"
          variant="filled"
          style={{ backgroundColor: "white", borderRadius: "4px" }}
          onChange={(val) => {
            setEmail(val.target.value);
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
          InputProps={{ sx: { height: 52 } }}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "white", color: "black" }}
          onClick={btnHandler}
        >
          Войти
        </Button>
        <span>Ещё не зарегистрированы?</span>
        <Link to={"/register"} style={{ textDecoration: "none" }}>
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
