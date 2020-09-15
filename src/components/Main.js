import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Header from './Header';
import Content from './Content';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';
// import MyContext from "../Context"
import MyContext from "../Context"



function Main() {



    const [weather, setWeather] = useState()
     const[city,setCity]=useState()
     const [error, setError] = useState(null)


    const api_call = async e => {
        e.preventDefault()
        let location=e.target.city.value;
        if (!location) {
            return setError("Please enter the name of the city"), setWeather(null)
          }

          
        const API_KEYS='534664e5fcdd594766fa74a908c0e398';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEYS}&units=metric`
        const request = axios.get(url)
        const response = await request
        console.log(response)
        setWeather(response.data.main)
        setCity(response.data.name)
      }

    useEffect(()=>{
        api_call()
    },[])
    return (
        <>
                   <div className='main'>
                       <Header/>   
                       <Content>
                                 <MyContext.Provider value={{api_call:api_call, weather:weather,city:city}}>
                                                    <WeatherSearch />
                                                    {weather && <WeatherData />}
                                 </MyContext.Provider>
                                 
                       </Content>
                   </div>
                    
        </>
    )
}

export default Main

