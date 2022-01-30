import { useState, useEffect } from 'react';
import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPedingView from './PokemonPedingView';

function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!pokemonName) {
      // при первом рендере приходит пустая строка и все падает,
      // по этому делаем проверку и не делаем fetch
      return;
    }

    setStatus('pending');

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => {
        if (res.ok) {
          return res.json(); //оброботка ошибки с кастомным сообщением
        }
        return Promise.reject(new Error('нет пакемона с таким именем'));
      })
      .then(pokemon => {
        // порядок важен
        setPokemon(pokemon);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [pokemonName]);

  if (status === 'idle') {
    return <div>Введите имя покемона</div>;
  }

  if (status === 'pending') {
    return <PokemonPedingView pokemonName={pokemonName} />;
  }

  if (status === 'rejected') {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === 'resolved') {
    return <PokemonDataView pokemon={pokemon} />;
  }
}

// class OldPokemonInfo extends Component {
//   state = {
//     pokemon: null,
//     error: null,
//     status: 'idle',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevNane = prevProps.pokemonName;
//     const nextName = this.props.pokemonName;

//     if (prevNane !== nextName) {
//       this.setState({ status: 'pending' });

//       fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
//         .then(res => {
//           if (res.ok) {
//             return res.json(); //оброботка ошибки с кастомным сообщением
//           }
//           return Promise.reject(new Error('нет пакемона с таким именем'));
//         })
//         .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
//         .catch(error => this.setState({ error, status: 'rejected' }));
//     }
//   }

//   render() {
//     const { pokemon, error, status } = this.state;

//     if (status === 'idle') {
//       return <div>Введите имя покемона</div>;
//     }

//     if (status === 'pending') {
//       return <PokemonPedingView pokemonName={this.props.pokemonName} />;
//     }

//     if (status === 'rejected') {
//       return <PokemonErrorView message={error.message} />;
//     }

//     if (status === 'resolved') {
//       return <PokemonDataView pokemon={pokemon} />;
//     }
//   }
// }

export default PokemonInfo;
