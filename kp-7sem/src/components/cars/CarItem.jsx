import { Button } from "@mui/material";
import carImg from "./no-car-photo.svg";

function CarItem({ el, handleOpen }) {
  return (
    <div
      className="car-item"
      key={`${el.name} + ${el.dealer} + ${el.plateNumber}`}
    >
      <div className="car-item-image">
        <img src={carImg} alt="" />
      </div>
      <div className="car-item-content">
        <div className="car-item-content-wrapper">
          <span style={{ color: "#6c7073" }}>{el.year}</span>
          <span
            style={{
              margin: "10px 0px 10px 0px",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {el.dealer} {el.name}
          </span>
          <div
            style={{
              display: "flex",
              width: "150px",
              justifyContent: "space-between",
              color: "#6c7073",
            }}
          >
            <span>{el.engineCapacity} л</span>·<span>{el.fuel}</span>·
            <span>{el.gearbox}</span>
          </div>
          <span style={{ marginTop: "30px" }}>от {el.tariff} Br/мес</span>
        </div>
        <div className="car-item-content-hidden">
          <div className="car-item-content-hidden-content">
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                color: "black",
                marginTop: "0px",
              }}
              onClick={() => handleOpen(el)}
            >
              Выбрать
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
