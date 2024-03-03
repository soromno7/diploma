import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import axios from "axios";

function ProfileDataPage() {
  const userData = sessionStorage.user;
  const id = Number(JSON.parse(userData).id);

  const [name, setName] = useState(JSON.parse(userData).first_name);
  const [secondName, setSecondName] = useState(JSON.parse(userData).last_name);
  const [date, setDate] = useState(dayjs(JSON.parse(userData).date_of_birth));
  const [phone, setPhone] = useState(JSON.parse(userData).phone);
  const [email, setEmail] = useState(JSON.parse(userData).email);
  const [password, setPassword] = useState(JSON.parse(userData).password);

  const updateStorage = async () => {
    await axios
      .get(`http://localhost:8080/user/get/${id}`)
      .then((res) => (sessionStorage.user = JSON.stringify(res.data)));
  };

  const updateHandler = async () => {
    const user = {
      id: id,
      email: email,
      password: password,
      phone: phone,
      date_of_birth: date,
      first_name: name,
      last_name: secondName,
      role: JSON.parse(userData).role,
      status: JSON.parse(userData).status,
    };

    await axios
      .patch(`http://localhost:8080/user/update/${id}`, user)
      .then(() => updateStorage())
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="modal-container">
      <h2 style={{ textAlign: "center" }}>Данные аккаунта</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "350px",
        }}
      >
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
          value={name}
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
          value={secondName}
        />
      </div>
      {/* <div
      style={{
        backgroundColor: "#ebebeb",
        borderRadius: "4px",
        width: "350px",
      }}
    > */}
      {/* <DatePicker
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
        defaultValuevalue={dayjs('2022-04-17')}
      /> */}
      {/* </div> */}
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
        value={phone}
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
        value={email}
      />
      <TextField
        id="filled-basic"
        label="Пароль"
        variant="filled"
        style={{ backgroundColor: "white", borderRadius: "4px" }}
        onChange={(val) => {
          setPassword(val.target.value);
        }}
        sx={{
          width: 350,
        }}
        InputProps={{ sx: { height: 52 } }}
        value={password}
      />
      <Button
        variant="contained"
        style={{ backgroundColor: "white", color: "black" }}
        onClick={() => updateHandler()}
      >
        Обновить
      </Button>
    </div>
  );
}

export default ProfileDataPage;
