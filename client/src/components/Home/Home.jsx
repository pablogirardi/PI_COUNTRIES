import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../Cards/Cards';
import { getCountries } from '../../redux/actions';

import style from './Home.module.css';

const Home = () => {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries);

    useEffect(() => {
        dispatch(getCountries());
    },[dispatch])

    return (
        <div className={style.homeContainer}>
            
            <SearchBar page={page} setPage={setPage} perPage={perPage} totalPages={totalPages}/>

            <OptionFilter />

            <Cards page={page} setPage={setPage} perPage={perPage} totalPages={totalPages}/>

            {countries.length !== 1 ? <Paginated page={page} setPage={setPage} totalPages={totalPages}/> : null}

        </div>
    )
}

export default Home