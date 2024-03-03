import axios from "axios";
import x from "./car.svg";
import { useEffect, useState } from "react";
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

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function MyCarPage() {
  const userData = sessionStorage.user;
  const id = Number(JSON.parse(userData).id);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setPrice("");
  };

  const [openService, setOpenService] = useState(false);
  const handleOpenService = () => setOpenService(true);
  const handleCloseService = () => {
    setOpenService(false);
  };

  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [date, setDate] = useState();

  const [car, setCar] = useState({});
  const [carName, setCarName] = useState("");
  const [dealer, setDealer] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [orderTime, setOrderTime] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [year, setYear] = useState("");
  const [carID, setCarID] = useState('')
  const [userID, setUserID] = useState('')

  const [contract, setContract] = useState("");
  const [contractQuantity, setContractQuantity] = useState("");
  const [services, setServices] = useState([]);
  const [dealerID, setDealerID] = useState();
  const [service, setService] = useState();

  const handleData = (car) => {
    setCarName(car.carName);
    setDealer(car.dealer);
    setStart(car.startDate);
    setEnd(car.endDate);
    setOrderDate(car.orderDate);
    setOrderTime(car.orderTime);
    setPlateNumber(car.plateNumber);
    setYear(car.year);
    setContractQuantity(car.contractQuantity);
    setDealerID(car.dealerID)
    setCarID(car.carID)
    setUserID(car.userID)
    console.log(car)
  };

  const createHandler = async () => {
    const obj = {
      price,
      quantity,
    };

    await axios
      .post("http://localhost:8080/contract/add", obj)
      .then((res) => {
        setContract(res.data);
        updateOrder(res.data.id);
        setContractQuantity(res.data.quantity);
      })
      .then(() => handleClose());
  };

  const updateOrder = async (contract) => {
    await axios.patch(
      `http://localhost:8080/order/update/${carID}/${contract}`
    );
  };

  const loadServices = async () => {
    await axios
    .get(`http://localhost:8080/service/get-by-dealer/${dealerID}`)
    .then((res) => setServices(res.data))
  }

  const calculatePrice = async () => {
    const data = {
      quantity,
    };

    await axios
      .post("http://localhost:8080/contract/get-price", data)
      .then((res) => setPrice(res.data));
  };

  const getCar = async () => {
    await axios
      .get(`http://localhost:8080/order/get-last/${id}`)
      .then((res) => {
        setCar(res.data);
        console.log(res.data)
      })
      .then(() => handleData(car));
  };

  const bookService = async () => {
    const obj = {
      date,
      service
    }

    console.log(obj)
    await axios.post(`http://localhost:8080/maintenance/create/${Number(userID)}/${Number(carID)}`, obj)
    .then((res) => console.log(res.data))
    .then(() => handleCloseService())
    .then(() => setService(''))
  }

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

  useEffect(() => {
    getCar();
    if(dealerID) loadServices()
  }, [year]);

  if (!carName) return <span>Оформите заказ</span>;
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
    >
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
            Введите количество посещений
          </Typography>
          <Typography id="descr" sx={{ mt: 4 }} component={"span"}>
            <div className="modal-container">
              <TextField
                id="filled-basic"
                label="Количество осмотров"
                variant="filled"
                style={{ backgroundColor: "white", borderRadius: "4px" }}
                onChange={(val) => {
                  setQuantity(val.target.value);
                }}
                sx={{
                  width: 350,
                }}
                InputProps={{ sx: { height: 52 } }}
              />
              {price == "" ? (
                ""
              ) : (
                <div>
                  <span>Стоимость:</span>
                  <span>{price}</span>
                </div>
              )}

              <Button
                variant="contained"
                style={{ backgroundColor: "white", color: "black" }}
                onClick={calculatePrice}
              >
                Рассчитать
              </Button>
              {price == "" ? (
                ""
              ) : (
                <Button
                  variant="contained"
                  style={{ backgroundColor: "white", color: "black" }}
                  onClick={createHandler}
                >
                  Оформить
                </Button>
              )}
            </div>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={openService}
        onClose={handleCloseService}
        aria-labelledby="service"
        aria-describedby="service"
      >
        <Box sx={style}>
          <Typography
            id="service"
            variant="h6"
            component="h4"
            style={{ textAlign: "center" }}
          >
            Введите дату посещения СТО
          </Typography>
          <Typography id="service" sx={{ mt: 4 }} component={"span"}>
            <div className="modal-container">
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="dealer-label">Адрес</InputLabel>
                <Select
                  labelId="dealer-label"
                  id="dealer-label"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  {services.map((el) => (
                    <MenuItem value={`${el.city}, ${el.street}, ${el.street_number}`} key={`${el.city} + ${el.id}`}>
                      {el.city}, {el.street}, {el.street_number}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Дата посещения СТО"
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
              </LocalizationProvider>
              <Button
                variant="contained"
                style={{ backgroundColor: "white", color: "black" }}
                onClick={bookService}
              >
                Записаться
              </Button>
            </div>
          </Typography>
        </Box>
      </Modal>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "800px",
          alignItems: "center",
        }}
      >
        <img src={x} style={{ width: "500px", height: "500px" }} />
        <div style={{ width: "200px", height: "180px", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ width: "83px" }}>Дилер</span>
              <span>{dealer}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Автомобиль</span>
              <span>{carName}</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Дата заказа</span>
              <span>{orderDate}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Время заказа</span>
              <span>{orderTime}</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>С</span>
              <span>{start}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>По</span>
              <span>{end}</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Год выпуска</span>
              <span>{year}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Номер</span>
              <span>{plateNumber}</span>
            </div>
          </div>
          {contractQuantity ? (
            <span>Количество посещений СТО: {contractQuantity}</span>
          ) : (
            ""
          )}
          <div>
            {contractQuantity ? (
              <Button
                variant="contained"
                style={{ backgroundColor: "white", color: "black" }}
                size="small"
                onClick={handleOpenService}
              >
                Записаться на СТО
              </Button>
            ) : (
              <Button
                variant="contained"
                style={{ backgroundColor: "white", color: "black" }}
                size="small"
                onClick={handleOpen}
              >
                Оформить сервисный контракт
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCarPage;
