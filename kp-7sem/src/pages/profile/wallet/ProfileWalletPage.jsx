import axios from "axios";
import "./wallet.css";
import { useEffect, useState } from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function ProfileWalletPage() {
  const userData = sessionStorage.user;
  const id = Number(JSON.parse(userData).id);

  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState();
  const [expiryDate, setExpiryDate] = useState({});
  const [cvv, setCVV] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getCards = async () => {
    await axios
      .get(`http://localhost:8080/card/get-by-user/${id}`)
      .then((res) => setCards(res.data));
  };

  const deleteHandler = async (card_id) => {
    await axios
      .delete(`http://localhost:8080/card/delete/${card_id}`)
      .then(() => getCards());
  };

  const createHandler = async () => {
    const card = {
      number,
      expiry_date: expiryDate[1] + "." + expiryDate[2][2] + expiryDate[2][3],
      cvv,
    };

    await axios
      .post(`http://localhost:8080/card/create/${id}`, card)
      .then((res) => console.log(res.data))
      .then(() => getCards())
      .then(() => handleClose())
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCards();
  }, []);

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
    <div className="wallet-container">
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
            Добавить карту
          </Typography>
          <Typography id="descr" sx={{ mt: 4 }} component={"span"}>
            <div className="modal-container">
              <TextField
                id="filled-basic"
                label="Номер карты"
                variant="filled"
                style={{ backgroundColor: "white", borderRadius: "4px" }}
                onChange={(val) => {
                  setNumber(val.target.value);
                }}
                sx={{
                  width: 330,
                }}
                InputProps={{ sx: { height: 52 } }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "330px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#ebebeb",
                    borderRadius: "4px",
                    width: "150px",
                  }}
                >
                  <DatePicker
                    label="Срок действия"
                    onChange={(val) => {
                      setExpiryDate(
                        val.$d
                          .toLocaleDateString("en-GB")
                          .replace("/", ".")
                          .replace("/", ".")
                          .split('.')
                      );
                    }}
                    disableOpenPicker={true}
                    format="MM.YY"
                  />
                </div>
                <TextField
                  id="filled-basic"
                  label="CVV"
                  variant="filled"
                  style={{ backgroundColor: "white", borderRadius: "4px" }}
                  onChange={(val) => {
                    setCVV(val.target.value);
                  }}
                  sx={{
                    width: 150,
                  }}
                  InputProps={{ sx: { height: 52 } }}
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "white", color: "black" }}
                  onClick={createHandler}
                >
                  Добавить
                </Button>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
      <div className="wallet-container-header">
        <h2>Ваши карты</h2>
        <button onClick={handleOpen}>+</button>
      </div>
      <div className="wallet-container-cards">
        {cards.map((el) => (
          <div className="card-item" key={el.number}>
            <span>{el.number}</span>
            <span>Действует до</span>
            <span>{el.expiry_date}</span>
            <button onClick={() => deleteHandler(el.id)}>del</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileWalletPage;
