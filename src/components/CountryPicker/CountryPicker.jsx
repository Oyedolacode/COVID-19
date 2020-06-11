import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = () => {
    const [fetchCountries, setFetchCountries] = useState([]);
    

    useEffect(() => {
        const fetchAPI= async () => {
            setFetchCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchCountries]);


    return (
        <FormControl className={styles.FormControl}>
        <NativeSelect>
        <option value="global">Global</option>
        </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;