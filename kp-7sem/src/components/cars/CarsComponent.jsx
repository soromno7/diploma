import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import Slider from "@mui/material/Slider";
import "./cars.css";
import CarItem from "./CarItem";

function CarsComponent() {
  const [cars, setCars] = useState([]);

  const [open, setOpen] = useState(false);

  const handleOpen = (el) => {
    setSelectedCar(el);
    setPrice(12 * el.tariff);
    setOpen(true);
  };
  const handleClose = () => {
    setPrice("");
    setOpen(false);
  };

  const [selectedCar, setSelectedCar] = useState({});
  const [price, setPrice] = useState(1);

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
      .then((res) => setCars(res.data));
  };

  const userData = sessionStorage.user;
  const id = Number(JSON.parse(userData).id);

  const format = (val) => `${val} мес`;

  const handleChange = (e) => {
    setPrice(e.target.value * selectedCar.tariff);
  };

  const createHandler = async () => {
    const order = {
      price,
    };

    handleClose();

    await axios.post(
      `http://localhost:8080/order/create/${id}/${id}/${selectedCar.id}`,
      order
    );
  };

  useEffect(() => {
    loadCars();
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "380px",
                }}
              >
                <Slider
                  valueLabelDisplay="on"
                  getAriaValueText={format}
                  valueLabelFormat={format}
                  onChange={handleChange}
                  step={12}
                  min={12}
                  max={60}
                />
              </div>
              <span>К оплате: {price} Br</span>
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

export default CarsComponent;
