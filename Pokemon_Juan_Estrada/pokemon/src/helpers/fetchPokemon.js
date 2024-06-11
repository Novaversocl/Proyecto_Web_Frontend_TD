import axios from 'axios';
import { URL_BASE_POKEMON } from '@/constants/urlConstants';

export const getPokemonPerPage = async (limit = 20, offset = 0) => {
    try {
        const { data } = await axios.get(URL_BASE_POKEMON, {
            params: {
                limit,
                offset,
            },
        });
        
        const pokemonDetailsPromises = data.results.map(async (pokemon) => {
            const details = await axios.get(pokemon.url);
            return {
                name: pokemon.name,
                image: details.data.sprites.front_default,
            };
        });

        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        return pokemonDetails;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        return [];
    }
};
