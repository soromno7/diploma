import "./main.css";
import axios from "axios";
import { useEffect, useState } from "react";

function MainPage() {
  const [promocode, setPromocode] = useState("");

  const getPromocode = async () => {
    await axios
      .get("http://localhost:8080/order/get-promocode")
      .then((res) => setPromocode(res.data));
  };

  useEffect(() => {
    getPromocode();
  }, []);

  return (
    <div>
      <div>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>Скрытая секция</h1>
        <div style={{ textAlign: "center" }}>
          Промокод на сегодня: {promocode}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
