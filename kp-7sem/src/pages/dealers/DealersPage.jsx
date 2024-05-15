import { useState } from "react";
import Table from "../../components/Table";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import axios from "axios";
import CellBtnDelete from "../../components/cells/CellBtnDelete";

function DealersPage() {
  const [rows, setRows] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState();

  const [updateTable, setUpdateTable] = useState(() => {});
  const [selRow, setSelRow] = useState();

  const createHandler = async () => {
    const dealer = {
      name,
    };

    await axios
      .post("http://localhost:8080/dealer/add", dealer)
      .then((res) => {
        console.log(res);
      })
      .then(() => updateTable())
      .then(() => handleClose())
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteHandler = async (dealerID) => {
    await axios
      .delete(`http://localhost:8080/dealer/delete/${dealerID}`)
      .then(() => updateTable());
  };

  const cols = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Дилер" },
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
            Добавить дилера
          </Typography>
          <Typography id="descr" sx={{ mt: 4 }} component={"span"}>
            <div className="modal-container">
              <TextField
                id="filled-basic"
                label="Дилер"
                variant="filled"
                style={{ backgroundColor: "white", borderRadius: "4px" }}
                onChange={(val) => {
                  setName(val.target.value);
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
        URL={"http://localhost:8080/dealer/get-all"}
        setUpdateTable={setUpdateTable}
        setSelectedRow={setSelRow}
        selRow={selRow}
        updateURL={"dealer/update"}
      />
    </div>
  );
}

export default DealersPage;
