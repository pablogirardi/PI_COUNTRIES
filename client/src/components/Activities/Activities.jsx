import { useSelector } from "react-redux";
import style from "./Activities.module.css";

const Activities = () => {
  const activity = useSelector((state) => state.activityType);

  return (
    <div className={style.activities}>
      <h3>Country: {activity[0].Countries[0].name}</h3>
      <h3>Name: {activity[0].name}</h3>
      <h3>Difficulty: {activity[0].difficulty}</h3>
      <h3>Season: {activity[0].season}</h3>
    </div>
  );
};

export default Activities;
