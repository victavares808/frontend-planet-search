import React, { useContext, useState } from 'react';
import starContext from '../context/Context';

function Table() {
  const { data } = useContext(starContext);
  const [nameFilter, setNameFilter] = useState('');

  const handleInputChange = ({ target }) => {
    setNameFilter(target.value.toLowerCase());
    console.log(nameFilter);
  };

  return (
    <main>
      <form>
        <input
          id="name-search"
          data-testid="name-filter"
          type="text"
          placeholder="Search a Planet"
          onChange={ handleInputChange }
        />
        <label htmlFor="name-search">
          Filter Type:
          <select>
            <option>Name</option>
          </select>
        </label>
      </form>
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
          {data.filter((element) => element.name.includes(nameFilter)).map(
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
    </main>
  );
}
export default Table;

/* tabela e orientações sobre useState/useEffect feitos conforme orientações da monitoria de Luá Octaviano no dia 07/06  */
