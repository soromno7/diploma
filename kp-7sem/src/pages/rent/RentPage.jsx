import axios from "axios";
import { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "@mui/material/Slider";
import "./cars.css";
import CarItem from "../../components/cars/CarItem.jsx";

function RentPage() {
  const userData = sessionStorage.user;
  const id = Number(JSON.parse(userData).id);

  const [cars, setCars] = useState([]);
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState();

  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(12);
  const [price, setPrice] = useState(0);
  const [selectedCar, setSelectedCar] = useState({});

  const handleOpen = (el) => {
    setSelectedCar(el);
    setPrice(Number(el.tariff) * (1 + 0.2 * ((60 - 12) / 12)));
    setOpen(true);
  };
  const handleClose = () => {
    setPrice("");
    setOpen(false);
    setDuration(12);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 390,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const loadCars = async () => {
    await axios
      .get(`http://localhost:8080/car/get-all`)
      .then((res) => setCars(res.data.filter(item => item.isAvailable === "Да")))

  };

  const loadCards = async () => {
    await axios
      .get(`http://localhost:8080/card/get-by-user/${id}`)
      .then((res) => setCards(res.data));
  };

  const format = (val) => `${val} мес`;

  const handleChange = (e) => {
    setDuration(e.target.value);
    setPrice(
      Number(selectedCar.tariff) * (1 + 0.2 * ((60 - e.target.value) / 12))
    );
  };

  const createHandler = async () => {
    const order = {
      price,
      duration,
    };

    await axios.post(
      `http://localhost:8080/order/create/${id}/${selectedCar.id}`,
      order
    );

    handleClose();
    loadCars();
  };

  useEffect(() => {
    loadCars();
    loadCards();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f4f4f4",
        minHeight: "93vh",
      }}
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
            Оформить заказ
          </Typography>
          <Typography id="descr" sx={{ mt: 4 }} component={"span"}>
            <div className="modal-container">
              <span>К оплате в месяц: {price} Br</span>
              <Slider
                valueLabelDisplay="on"
                getAriaValueText={format}
                valueLabelFormat={format}
                onChange={handleChange}
                step={12}
                min={12}
                max={60}
                style={{
                  width: "370px",
                }}
              />
              {cards.length !== 0 ? (
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="dealer-label">Банковская карта</InputLabel>
                  <Select
                    labelId="dealer-label"
                    id="dealer-label"
                    value={card}
                    onChange={(e) => setCard(e.target.value)}
                  >
                    {cards.map((el) => (
                      <MenuItem value={el.id} key={`${el.name} + ${el.id}`}>
                        {el.number}, {el.expiry_date}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <span>
                  Нет добавленных карт? &nbsp;
                  <Link
                    to="http://localhost:3000/main/profile/wallet"
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "blue",
                    }}
                  >
                    Добавить
                  </Link>
                </span>
              )}
              <div>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "white", color: "black" }}
                  onClick={createHandler}
                >
                  Оформить заказ
                </Button>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
      <div className="cars-container">
        {cars.map((el) => (
          <CarItem
            el={el}
            handleOpen={handleOpen}
            key={`${el.name} + ${el.tariff}`}
          />
        ))}
      </div>
    </div>
  );
}

export default RentPage;
