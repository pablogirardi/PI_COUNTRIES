import style from "./Landing.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className={style.landingPage}>
      <Link to="/home">
        <button className={style.buttonHome}>Home Page</button>
      </Link>
    </div>
  );
}
