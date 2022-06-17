import React, { useState, useEffect } from 'react';

function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPlanetData = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planetData = await response.json();
      setData(planetData.results);
    };
    fetchPlanetData();
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Create</th>
          <th>Edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({
            name,
            rotation_period: rotation,
            orbital_period: orbital,
            diameter,
            gravity,
            terrain,
            surface_water: surface,
            population,
            films,
            created,
            climate,
            edited,
            url,
          }) => (
            <tr key={ name }>
              <td>{name}</td>
              <td>{rotation}</td>
              <td>{orbital}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surface}</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}
export default Table;
