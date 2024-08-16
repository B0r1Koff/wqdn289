import { useNavigate } from "react-router"
import { routes } from "../../consts/routes";
import "./home.css"

export function Home() {
    const navigate = useNavigate();

    return(
        <div className="home-content-wrapper">
            <button className="form-button" onClick={() => navigate(routes.FORM_ROUTE)}>FORM</button>
        </div>
    )
}

