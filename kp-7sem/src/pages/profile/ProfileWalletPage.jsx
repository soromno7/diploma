import axios from "axios";
import "./wallet.css";
import { useEffect, useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

function ProfileWalletPage() {
  const userData = sessionStorage.user;
  const id = Number(JSON.parse(userData).id);

  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getCards = async () => {
    await axios
      .get(`http://localhost:8080/card/get-by-user/${id}`)
      .then((res) => setCards(res));
  };

  useEffect(() => {
    getCards();
  }, []);

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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "380px",
                }}
              ></div>
              <div>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "white", color: "black" }}
                  onClick={""}
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
      <div className="wallet-container-cards"></div>
    </div>
  );
}

export default ProfileWalletPage;
