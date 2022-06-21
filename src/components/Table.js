import React, { useContext, useState } from 'react';
import starContext from '../context/Context';

function Table() {
  const { data, setData } = useContext(starContext);
  const [nameFilter, setNameFilter] = useState('');
  const [savedOption1, setSavedOption1] = useState('population');
  const [savedOption2, setSavedOption2] = useState('maior que');
  const [savedOption3, setSavedOption3] = useState(0);
  const [fiterOptions, setFiterOptions] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleInputChange = ({ target }) => {
    setNameFilter(target.value.toLowerCase());
  };
  const handleSelectedOptions1 = ({ target }) => {
    setSavedOption1(target.value);
  };
  const handleSelectedOptions2 = ({ target }) => {
    setSavedOption2(target.value);
  };
  const handleSelectedOptions3 = ({ target }) => {
    setSavedOption3(target.value);
  };
  const handleClickButton = () => {
    if (savedOption2 === 'maior que') {
      const filteredData = data
        .filter((planet) => planet[savedOption1] > parseInt(savedOption3, 10));
      setData(filteredData);
    } else if (savedOption2 === 'menor que') {
      const filteredData2 = data
        .filter((planet) => planet[savedOption1] < parseInt(savedOption3, 10));
      setData(filteredData2);
    } else if (savedOption2 === 'igual a') {
      const filteredData3 = data
        .filter((planet) => planet[savedOption1] === savedOption3);
      setData(filteredData3);
    }
    const helper = fiterOptions.filter((elem) => elem !== savedOption1);
    setFiterOptions(helper);
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
        <label htmlFor="column-filter">
          Filter By Column
          <select
            data-testid="column-filter"
            onChange={ handleSelectedOptions1 }
            value={ savedOption1 }
          >
            { fiterOptions.map((elem) => <option key={ elem }>{ elem }</option>)}
          </select>
        </label>
        <label htmlFor="column-filter">
          Filter By Comparison
          <select
            data-testid="comparison-filter"
            onChange={ handleSelectedOptions2 }
            value={ savedOption2 }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ handleSelectedOptions3 }
          value={ savedOption3 }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleClickButton }
        >
          Filtrar
        </button>
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
          {/* linha 53
          -filtragem dos dados dos planetas com método filter.
          -mapeamento dos nomes dos planetas com método map.
          -verificação das strings dos nomes dos planetas por meio do método includes */}
          {data.filter((element) => element.name.toLowerCase().includes(nameFilter)).map(
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
