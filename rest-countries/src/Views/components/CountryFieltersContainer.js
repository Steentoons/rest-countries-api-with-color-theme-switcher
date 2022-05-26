import React from 'react'
import { useEffect } from 'react'

const CountryFieltersContainer = (props) => {

  return (
    <div>
        <input type="text" onKeyDown={(e) => {
            let ev = e.target.value
            
            props.setState(ev)
        }} />
    </div>
  )
}

export default CountryFieltersContainer