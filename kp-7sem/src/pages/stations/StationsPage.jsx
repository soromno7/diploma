import { useEffect, useState } from "react";
import Table from "../../components/Table";
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
import axios from "axios";
import CellBtnDelete from "../../components/cells/CellBtnDelete";

function StationsPage() {
  const [rows, setRows] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [building, setBuilding] = useState();

  const [updateTable, setUpdateTable] = useState(() => {});
  const [selRow, setSelRow] = useState();

  const createHandler = async () => {
    const station = {
      city,
      street,
      building,
    };

    console.log(city);

    await axios
      .post(`http://localhost:8080/station/create`, station)
      .then(() => updateTable())
      .then(() => handleClose())
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteHandler = async (stationID) => {
    await axios
      .delete(`http://localhost:8080/station/delete/${stationID}`)
      .then(() => updateTable());
  };

  const cols = [
    { field: "id", headerName: "ID" },
    { field: "city", headerName: "Город" },
    { field: "street", headerName: "Улица" },
    { field: "building", headerName: "Номер здания" },
    {
      field: "",
      headerName: "Действие",
      editable: false,
      cellRenderer: CellBtnDelete,
      cellRendererParams: { deleteHandler },
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
            Добавить СТО
          </Typography>
          <Typography id="descr" sx={{ mt: 4 }} component={"span"}>
            <div className="modal-container">
              <TextField
                id="filled-basic"
                label="Город"
                variant="filled"
                style={{ backgroundColor: "white", borderRadius: "4px" }}
                onChange={(val) => {
                  setCity(val.target.value);
                }}
                sx={{
                  width: 350,
                }}
                InputProps={{ sx: { height: 52 } }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "350px",
                }}
              >
                <TextField
                  id="filled-basic"
                  label="Улица"
                  variant="filled"
                  style={{ backgroundColor: "white", borderRadius: "4px" }}
                  onChange={(val) => {
                    setStreet(val.target.value);
                  }}
                  sx={{
                    width: 165,
                  }}
                  InputProps={{ sx: { height: 52 } }}
                />
                <TextField
                  id="filled-basic"
                  label="Номер здания"
                  variant="filled"
                  style={{ backgroundColor: "white", borderRadius: "4px" }}
                  onChange={(val) => {
                    setBuilding(val.target.value);
                  }}
                  sx={{
                    width: 165,
                  }}
                  InputProps={{ sx: { height: 52 } }}
                />
              </div>
              <Button
                variant="contained"
                style={{ backgroundColor: "white", color: "black" }}
                onClick={createHandler}
              >
                Добавить
              </Button>
            </div>
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
        URL={"http://localhost:8080/station/get-all"}
        setUpdateTable={setUpdateTable}
        setSelectedRow={setSelRow}
        selRow={selRow}
        updateURL={"service/update"}
      />
    </div>
  );
}

export default StationsPage;
