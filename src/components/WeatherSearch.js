import React, {useContext} from "react"

import MyContext from "../Context"


function WeatherSearch() {
    //    const apicall=useContext(MyContext)
         const {api_call} = useContext(MyContext)
       
    return (
        <div>
                    <div className="weather-search">
                       <form onSubmit={api_call} className="weather-search__form">
                          
                         <input autoComplete="off" name="city" className="weather-search__input" type="text"/>
                         <div className="weather-search__submit">
                         <button className="weather-search__button">&rarr;</button>
                         </div>
                     </form>
                     </div>
                        
        </div>
    )
}

export default WeatherSearch

