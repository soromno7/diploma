import { Link } from "react-router-dom";
import img from "./ban.svg";

function BanPage() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
      <img src={img} style={{width: '400px', height: '400px'}} />
      <span>Вы были заблокированы Администратором сервиса.</span>
      <span>Для получения дополнительной информации свяжитесь с Администратором сервиса.</span>
      <Link to="/login">Вернуться назад</Link>
    </div>
  );
}

export default BanPage;