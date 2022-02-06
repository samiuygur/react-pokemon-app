import './App.css';
import pokemon from './pokemon.json';

function App() {
  return (
    <div className="App">
      <h1>Pokemon Search</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Feature</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map(pokemon => (
            <tr>
              <td>{pokemon.name.english}</td>
              <td>{pokemon.type.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
