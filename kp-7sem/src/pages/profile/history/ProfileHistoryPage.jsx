import { TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./history.css";

function ProfileHistoryPage() {
  const userData = sessionStorage.user;
  const id = Number(JSON.parse(userData).id);

  const [history, setHistory] = useState([]);

  const getHistory = async () => {
    await axios
      .get(`http://localhost:8080/order/get-by-user/${id}`)
      .then((res) => setHistory(res.data));
    console.log(history);
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className="history-container">
      <h2>История заказов</h2>
      {history.map((el) => (
        <div
          className="history-item"
          key={`${el.carName} ${el.year} ${el.engineCapacity}`}
        >
          <div className="history-item-row">
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
          <div className="history-item-row">
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
          <div className="history-item-row" style={{ justifyContent: "start" }}>
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
      ))}
    </div>
  );
}

export default ProfileHistoryPage;
