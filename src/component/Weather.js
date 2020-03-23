import React  from 'react'

const Weather = (props)=> {
     return(
         <div className="info">
             {
                props.tempreature &&
                  <p className="info-key"> tempreature:
                  <span className="info-value">{props.tempreature}</span> 
                  </p>
             }
             {
                props.city &&
                 <p className="info-key"> City:
                  <span className="info-value">{props.city}</span>
                  </p>
             }
             {
                props.country &&
                  <p className="info-key"> Country:
                    <span className="info-value">{props.country}</span>
                  </p>
             }
             {
                props.humidity  &&
                 <p className="info-key">humidity :
                   <span className="info-value">{props.humidity}</span> 
                   </p>
             }
             {
                props.Description &&
                  <p className="info-key"> Description:
                    <span className="info-value">{props.Description}</span>
                    </p>
             }
             {
                props.error &&
                  <p className="info-key"> error:
                  <span className="info-value">{props.error} </span>
                  </p>
             }
         </div>
     )
   }


export default Weather;