import { writable } from 'svelte/store';

export const pokemon = writable([]);

const fetchPokemon = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://cdn.traction.one/pokedex/pokemon/${index + 1}.png`,
			colors: {
				fire: '#F57D31',
				grass: '#74CB48',
				electric: '#F9CF30',
				water: '#6493EB',
				ground: '#DEC16B',
				rock: '#B69E31',
				fairy: '#E69EAC',
				poison: '#A43E9E',
				bug: '#A7B723',
				dragon: '#7037FF',
				psychic: '#FB5584',
				flying: '#A891EC',
				fighting: '#C12239',
				normal: '#AAA67F'
			}
		};
	});
	pokemon.set(loadedPokemon);
};
fetchPokemon();
