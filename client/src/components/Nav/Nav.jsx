import { Link } from 'react-router-dom'
import style from './Nav.module.css'
import { useSelector } from 'react-redux'

export default function Nav () {

    const allCountries = useSelector(state => state.countriesCopy);

    const handleClickCountries = () => {
        return allCountries;
    }

    return (

        <div className={style.homeBack}>
            
            <Link to='/'>
                <button>Home</button>
            </Link>

            
            <Link to='/home'>
                <button onClick={handleClickCountries()}>Todos los países</button>
            </Link>

            <Link to='/form'>
                <button>Crear nueva actividad</button>
            </Link>

        </div>

    )
}