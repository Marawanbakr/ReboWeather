import React, {Component} from 'react';
import Form from './component/Form';
import Weather from './component/Weather';

const API_KEY = "0b785136874951ca9c577a4b943cb707";
class App extends Component {

  state ={
    tempreatur: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error:'',
  }

getWeather =async (e) => {
  e.preventDefault()
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
  const data = await api.json();
  if (city && country) {
    this.setState({
      tempreature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error:'',
  
    })
  }else {
   this.setState({
    tempreature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error:'please Enter Data',
   })

  }
}
  render (){
    return (
      <div className="wrapper">
        <div className="from-container">
        <Form getWeather={this.getWeather}/>
        <Weather
         tempreature={this.state.tempreature}
         city={this.state.city}
         country={this.state.country}
         humidity={this.state.humidity}
         description={this.state.description}
         error={this.state.error}
        />
        </div>
      </div>
    );
  }
}
export default App;