import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

function PokemonView() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <div style={{ maxWidth: 1170, margin: '0 avto', padding: 20 }}>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} theme="colored" />
    </div>
  );
}

// class oldPokemonView extends Component {
//   state = {
//     pokemonName: '',
//   };

//   hendleFormSubmit = pokemonName => {
//     console.log(pokemonName);
//     this.setState({ pokemonName });
//   };

//   render() {
//     return (
//       <div style={{ maxWidth: 1170, margin: '0 avto', padding: 20 }}>
//         <PokemonForm onSubmit={this.hendleFormSubmit} />
//         <PokemonInfo pokemonName={this.state.pokemonName} />
//         <ToastContainer autoClose={3000} theme="colored" />
//       </div>
//     );
//   }
// }

export default PokemonView;
