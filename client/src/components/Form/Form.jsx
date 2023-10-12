import { useState } from "react";
import { validations } from "./validations";
import style from "./Form.module.css";
import { Link } from "react-router-dom";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const handleChange = (event) => {
    const parameter = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [parameter]: value,
    });

    setErrors(
      validations({
        ...form,
        [parameter]: value,
      })
    );
  };

  return (
    <div className={style.backForm}>
      <div className={style.formContainer}>
        <h2>Crear Actividad</h2>

        <form className={style.formBox}>
          <div className={style.nombreForm}>
            <p>Nombre</p>
            <input
              type="text"
              placeholder="Tipo de actividad"
              onChange={handleChange}
              name="name"
              value={form.name}
            />
          </div>

          <div className={style.diffForm}>
            <p>Dificultad</p>
            <input
              type="text"
              placeholder="1 a 5"
              onChange={handleChange}
              name="difficulty"
              value={form.difficulty}
            />
          </div>

          <div className={style.durForm}>
            <p>Duración</p>
            <input
              type="text"
              placeholder="00:00"
              onChange={handleChange}
              name="duration"
              value={form.duration}
            />
          </div>

          <div className={style.tempForm}>
            <p>Temporada</p>
            <input
              type="text"
              placeholder=" 🌊 🍂 🏂 🌷 "
              onChange={handleChange}
              name="season"
              value={form.season}
            />
          </div>
        </form>
        <Link to={"/home"}>
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Form;
