import { useState, useEffect } from 'react'
import axios from 'axios'

export const useCountry = (name) => {

    const [country, setCountry] = useState(null)
  
    useEffect( async () => {

        if(name !== ''){
            
            const response = await axios.get(`https://restcountries.com/v2/name/${name}?fullText=true`)
            response.data[0] ? setCountry({found: true, ...response.data[0]}) : setCountry({found: false})            
        }
    }, [name])
  
    return country
}

export const useField = (type) => {

    const [value, setValue] = useState('')
  
    const onChange = (event) => {
      setValue(event.target.value)
    }
  
    return {
      type,
      value,
      onChange
    }
}