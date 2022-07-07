import React from 'react';
import CitySelector from './components/CitySelector/CitySelector.js';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import {API_KEY, API_BASE_URL} from './apis/config'
import WeatherList from './components/WeatherList.js';

const App = () => {
  const {data, error, isLoading, setUrl, reset, setReset} = UseFetch();

  // error handling and loading
  const getContent = () => {
    if(reset){
      return <h2> </h2>
    }
    if(error) return <h2>Error: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <Container className="App">
      <CitySelector onSearch={(city, unit) => setUrl(`${API_BASE_URL}/data/2.5/forecast/daily?q=${city}&cnt=5&units=${unit}&appid=${API_KEY}`)} 
                    onReset={() => setReset(true)}/>
      {getContent()}
    </Container>
  );
};

export default App;