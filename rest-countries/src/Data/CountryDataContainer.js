import React from 'react'

import axios from "axios";

import { useState } from "react";
import { useEffect } from "react";

import CountryFieltersContainer from '../Views/components/CountryFieltersContainer';
import CountryCardContainer from '../Views/components/CountryCardContainer';

const CountryDataContainer = () => {
    useEffect(() => {
        fetchCountries()
      }, [])
    
      const [countries, setCountries] = useState([])
      const [searchInput, setSearchInput] = useState("")
    
      // useEffect(() => {
      //   countries.forEach(item => {
      //     console.log(item.name.official)
      //   })
      // }, [countries])
    
       const fetchCountries = async() => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all')

            const {data} = response
    
            setCountries(data)
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    
      return (
        <div className="App" onClick={() => fetchCountries()}>
          <CountryFieltersContainer searchInput={searchInput} setState = {setSearchInput} />
          <CountryCardContainer state={countries} searchInput={searchInput} />
        </div>
      );
}

export default CountryDataContainer