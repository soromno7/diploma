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

  const [order, setOrder] = useState();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState({});
  const [station, setStation] = useState();
  const [stations, setStations] = useState([]);
  const [cars, setOrders] = useState([]);

  const handleOpen = (el) => {
    setOpen(true);
    setOrder(el.id)
  }
  const handleClose = () => {
    setOpen(false);
    setStation('')
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

  const createHandler = async () => {
    const service = {
      address: station[1] + ", " + station[2] + ", " + station[3],
      date
    };
    
    await axios
      .post(`http://localhost:8080/service/create/${id}/${order}/${station[0]}`, service)
      .then(() => handleClose())
      .catch((err) => {
        console.log(err);
      });
  };
  
  const getCars = async () => {
    await axios
      .get(`http://localhost:8080/order/get-by-user/${id}`)
      .then((res) => setOrders(res.data))
  };

  const loadStations = async () => {
    await axios
      .get("http://localhost:8080/station/get-all")
      .then((res) => setStations(res.data));
  };

  useEffect(() => {
    getCars();
    loadStations();
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
                  <InputLabel id="station-label">Куда</InputLabel>
                  <Select
                    labelId="station-label"
                    id="station-label"
                    value={station}
                    onChange={(e) => setStation(e.target.value)}
                  >
                  {stations.map((el) => (
                    <MenuItem value={[el.id, el.city, el.street, el.building]} key={`${el.street} + ${el.id}`}>
                      {el.city}, {el.street}, {el.building}
                    </MenuItem>
                  ))}
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
                  onClick={createHandler}
                >
                  Записаться
                </Button>
              </div>
            </LocalizationProvider>
          </Typography>
        </Box>
      </Modal>
      <h2>Ваши автомобили</h2>
      {cars.map((el) => (
        <div
          className="car-rent-item"
          key={`${el.car.name} ${el.car.year} ${el.car.engineCapacity}`}
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
                  value={el.dealer.name + " " + el.car.name}
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
                  value={el.car.year}
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
                  value={el.car.engineCapacity}
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
                  value={el.car.gearbox}
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
                  value={el.car.fuel}
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
                  value={el.car.plateNumber}
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
            <CarRepairIcon onClick={() => handleOpen(el)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyCarPage;
