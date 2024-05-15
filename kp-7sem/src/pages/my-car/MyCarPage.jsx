import carPic from "./no-car-photo.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import ClearIcon from "@mui/icons-material/Clear";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import "./car.css";

function MyCarPage() {
  const userData = sessionStorage.user;
  const id = Number(JSON.parse(userData).id);

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

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

  const [cars, setCars] = useState([]);
  const getCars = async () => {
    await axios
      .get(`http://localhost:8080/order/get-by-user/${id}`)
      .then((res) => setCars(res.data));
  };

  useEffect(() => {
    getCars();
  }, []);
  return (
    <div className="car-rent-container">
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
            Записаться на СТО
          </Typography>
          <Typography id="descr" sx={{ mt: 4 }} component={"span"}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="modal-container">
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="dealer-label">Куда</InputLabel>
                  <Select
                    labelId="dealer-label"
                    id="dealer-label"
                    // value={dealer}
                    // onChange={(e) => setDealer(e.target.value)}
                  >
                    {/* {dealers.map((el) => (
                    <MenuItem value={el.id} key={`${el.name} + ${el.id}`}>
                      {el.name}
                    </MenuItem>
                  ))} */}
                  </Select>
                </FormControl>
                <div
                  style={{
                    backgroundColor: "#ebebeb",
                    borderRadius: "4px",
                    width: "100%",
                  }}
                >
                  <DatePicker
                    label="Когда"
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
                <Button
                  variant="contained"
                  style={{ backgroundColor: "white", color: "black" }}
                  // onClick={}
                >
                  Записаться
                </Button>
              </div>
            </LocalizationProvider>
          </Typography>
        </Box>
      </Modal>
      <h2>Автомобили в лизинге</h2>
      {cars.map((el) => (
        <div
          className="car-rent-item"
          key={`${el.carName} ${el.year} ${el.engineCapacity}`}
        >
          <div className="car-rent-item-container">
            <div className="car-rent-item-img">
              <img src={carPic} alt="" />
            </div>
            <div className="car-rent-item-content">
              <div className="car-rent-item-content-row">
                <TextField
                  id="filled-basic"
                  label="Автомобиль"
                  variant="filled"
                  style={{ backgroundColor: "white", borderRadius: "4px" }}
                  value={el.dealer + " " + el.carName}
                  sx={{
                    width: 200,
                  }}
                  InputProps={{ sx: { height: 45 } }}
                  disabled
                />
                <TextField
                  id="filled-basic"
                  label="Год"
                  variant="filled"
                  style={{ backgroundColor: "white", borderRadius: "4px" }}
                  value={el.year}
                  sx={{
                    width: 60,
                  }}
                  InputProps={{ sx: { height: 45 } }}
                  disabled
                />
                <TextField
                  id="filled-basic"
                  label="Объём"
                  variant="filled"
                  style={{ backgroundColor: "white", borderRadius: "4px" }}
                  value={el.engineCapacity}
                  sx={{
                    width: 70,
                  }}
                  InputProps={{ sx: { height: 45 } }}
                  disabled
                />
              </div>
              <div className="car-rent-item-content-row">
                <TextField
                  id="filled-basic"
                  label="Коробка"
                  variant="filled"
                  style={{ backgroundColor: "white", borderRadius: "4px" }}
                  value={el.gearbox}
                  sx={{
                    width: 130,
                  }}
                  InputProps={{ sx: { height: 45 } }}
                  disabled
                />
                <TextField
                  id="filled-basic"
                  label="Топливо"
                  variant="filled"
                  style={{ backgroundColor: "white", borderRadius: "4px" }}
                  value={el.fuel}
                  sx={{
                    width: 100,
                  }}
                  InputProps={{ sx: { height: 45 } }}
                  disabled
                />
                <TextField
                  id="filled-basic"
                  label="Номер"
                  variant="filled"
                  style={{ backgroundColor: "white", borderRadius: "4px" }}
                  value={el.plateNumber}
                  sx={{
                    width: 100,
                  }}
                  InputProps={{ sx: { height: 45 } }}
                  disabled
                />
              </div>
              <div
                className="car-rent-item-content-row"
                style={{ justifyContent: "start" }}
              >
                <TextField
                  id="filled-basic"
                  label="Дата заказа"
                  variant="filled"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    marginRight: "10px",
                  }}
                  value={el.orderDate}
                  sx={{
                    width: 105,
                  }}
                  InputProps={{ sx: { height: 45 } }}
                  disabled
                />
                <TextField
                  id="filled-basic"
                  label="Длительность"
                  variant="filled"
                  style={{ backgroundColor: "white", borderRadius: "4px" }}
                  value={`${el.duration} мес.`}
                  sx={{
                    width: 105,
                  }}
                  InputProps={{ sx: { height: 45 } }}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="car-rent-item-btns">
            <ClearIcon />
            <CarRepairIcon onClick={handleOpen} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyCarPage;
