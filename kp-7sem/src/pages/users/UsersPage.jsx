import { useState } from "react";
import Table from "../../components/Table";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./users.css";
import axios from "axios";
import CellBtns from "../../components/cells/CellBtnUsers";

function UsersPage() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState();
  const [secondName, setSecondName] = useState();
  const [date, setDate] = useState({});
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [updateTable, setUpdateTable] = useState(() => {});
  const [selRow, setSelRow] = useState();

  const createHandler = async () => {
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
      .then((res) => {
        console.log(res);
      })
      .then(() => updateTable())
      .then(() => handleClose())
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteHandler = async (userID) => {
    await axios
      .delete(`http://localhost:8080/user/delete/${userID}`)
      .then(() => updateTable());
  };

  const toggleBlockHandler = async (userID) => {
    await axios
      .post(`http://localhost:8080/user/toggle-block/${userID}`)
      .then(() => updateTable());
  };

  const cols = [
    { field: "id", headerName: "ID" },
    { field: "first_name", headerName: "Имя" },
    { field: "last_name", headerName: "Фамилия" },
    { field: "email", headerName: "Почта" },
    { field: "date_of_birth", headerName: "Дата рождения" },
    { field: "phone", headerName: "Номер телефона" },
    { field: "password", headerName: "Пароль" },
    { field: "status", headerName: "Статус" },
    {
      field: "",
      headerName: "Действие",
      editable: false,
      cellRenderer: CellBtns,
      cellRendererParams: { toggleBlockHandler, deleteHandler },
    },
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="descr"
      >
        <Box sx={style}>
          <Typography
            id="title"
            variant="h6"
            component="h4"
            style={{ textAlign: "center" }}
          >
            Добавить пользователя
          </Typography>
          <Typography id="descr" sx={{ mt: 4 }} component={"span"}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
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
              <div className="modal-container">
                <div
                  style={{
                    backgroundColor: "#ebebeb",
                    borderRadius: "4px",
                    width: "350px",
                  }}
                >
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
                  style={{ backgroundColor: "white", borderRadius: "4px" }}
                  onChange={(val) => {
                    setPassword(val.target.value);
                  }}
                  sx={{
                    width: 350,
                  }}
                  InputProps={{ sx: { height: 52 } }}
                />
                <Button
                  variant="contained"
                  style={{ backgroundColor: "white", color: "black" }}
                  onClick={createHandler}
                >
                  Добавить
                </Button>
              </div>
            </LocalizationProvider>
          </Typography>
        </Box>
      </Modal>
      <div className="btnContainer">
        <Button
          variant="contained"
          style={{ backgroundColor: "white", color: "black" }}
          size="small"
          onClick={handleOpen}
        >
          Добавить
        </Button>
      </div>
      <Table
        cols={cols}
        rows={rows}
        setRows={setRows}
        URL={"http://localhost:8080/user/get-all"}
        setUpdateTable={setUpdateTable}
        setSelectedRow={setSelRow}
        selRow={selRow}
        updateURL={"user/update"}
      />
    </div>
  );
}

export default UsersPage;
