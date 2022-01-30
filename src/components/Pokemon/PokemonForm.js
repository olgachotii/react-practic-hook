import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = { form: { marginBotom: 20 } };

function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const hendleNameChange = e => {
    setPokemonName(e.currentTarget.value.toLowerCase());
  };

  const hendleSubmit = e => {
    e.preventDefault();

    if (pokemonName.trim() === '') {
      //trim()обрезает пробелы у строк
      return toast.warning('введите имя покемона');
    }
    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <form onSubmit={hendleSubmit} style={styles.form}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={hendleNameChange}
      />
      <button type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        Найти
      </button>
    </form>
  );
}

// class OldPokemonForm extends Component {
//   state = {
//     pokemonName: '',
//   };

//   hendleNameChange = e => {
//     this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
//   };

//   hendleSubmit = e => {
//     e.preventDefault();

//     if (this.state.pokemonName.trim() === '') {
//       //trim()обрезает пробелы у строк
//       return toast.warning('введите имя покемона');
//     }
//     this.props.onSubmit(this.state.pokemonName);
//     this.setState({ pokemonName: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.hendleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="pokemonName"
//           value={this.state.pokemonName}
//           onChange={this.hendleNameChange}
//         />
//         <button type="submit">
//           <ImSearch style={{ marginRight: 8 }} />
//           Найти
//         </button>
//       </form>
//     );
//   }
// }

export default PokemonForm;
