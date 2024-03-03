import { Link, Outlet } from "react-router-dom";
import { AdminRoutes, UserRoutes } from "../../constants/routes";
import "./wrapper.css"

function WrapperPage() {
    let route = null;
    let userData = sessionStorage.user;
    
    if(JSON.parse(userData).role === 'user') route = UserRoutes
    else route = AdminRoutes

    return (
        <div>
            <div className="nav">
                {
                    route.map((el) => 
                        <Link to={el.path} key={`${el.path}` + `${el.name}`}>{el.name}</Link>
                    )
                }
                <Link to="/" onClick={() => sessionStorage.clear()}>Выйти</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default WrapperPage;