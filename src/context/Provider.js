import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import starContext from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPlanetData = async () => {
      const ApiResponse = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planetData = await ApiResponse.json();
      setData(planetData.results);
    };
    fetchPlanetData();
  }, []);

  return (
    <starContext.Provider value={ { data } }>
      {children}
    </starContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
