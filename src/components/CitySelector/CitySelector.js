import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
import classes from './CitySelector.module.css';

const CitySelector = ({onSearch, onReset}) => {
    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('imperial');

    return (
      <> 
        <Row>
          <Col>
            <h3 className={classes.Title}>Search Your City for a 5 Day Weather Forecast</h3>
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            <FormControl
              className={classes.TextInput}
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
        </Row>

        <div className={classes.RadioRow}>
          <label className={classes.Radio}>
            <input
              type="radio"
              name="units"
              checked={unit === "imperial"}
              value="imperial"
              onChange={(event) => setUnit(event.target.value)}
            /> Imperial
          </label>
          <label className={classes.Radio}>
            <input
              type="radio"
              name="units"
              checked={unit === "metric"}
              value="metric"
              onChange={(event) => setUnit(event.target.value)}
            /> Metric
          </label>
        </div>

        <Row className={classes.ButtonRow}>
          <Col>
            <Button className={classes.Button} onClick={() => onSearch(city, unit)}>Get Forecast</Button>
            <Button className={classes.ResetButton} onClick={() => setCity('')&setUnit('imperial')&onReset()} >Reset</Button>
          </Col>
        </Row>
      </>
    );
  };

export default CitySelector;