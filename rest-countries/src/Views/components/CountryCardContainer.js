import React from 'react'
import CountryCard from './CountryCard'
import { useEffect } from 'react'

const CountryCardContainer = (props) => {

  var country_card

  // Printing all the country cards...
  useEffect(() => {

    if(props.searchInput === "") {
      console.log("calling")
      country_card = props.state.map((item, index) => {
       const prop = props.state[index]
         return (
           <CountryCard flag={prop.flags.png} name={prop.name.common} population={prop.population} region={prop.region} capital={prop.capital} />
         )
     })
   }
   else if (props.searchInput !== "") {
    console.log("also calling")

    // Printing the filtered countries...
    let filteredCountries = props.state.filter((item, index) => {
      const prop = props.state[index]
      return (
        props.searchInput === prop.name.common
      )
    });

    console.log(filteredCountries)

      country_card = filteredCountries.map((item, index) => {
       const prop = props.state[index]
         return (
           <CountryCard flag={prop.flags.png} name={prop.name.common} population={prop.population} region={prop.region} capital={prop.capital} />
         )
     })
   }


  }, [props.searchInput])

  console.log(country_card)
    
  return (
    <div>
        { country_card } 
    </div>
  )
}

export default CountryCardContainer