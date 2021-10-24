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
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`,
			colors: {
				fire: '#FDDFDF',
				grass: '#DEFDE0',
				electric: '#FCF7DE',
				water: '#DEF3FD',
				ground: '#f4e7da',
				rock: '#d5d5d4',
				fairy: '#fceaff',
				poison: '#98d7a5',
				bug: '#f8d5a3',
				dragon: '#97b3e6',
				psychic: '#eaeda1',
				flying: '#F5F5F5',
				fighting: '#E6E0D4',
				normal: '#F5F5F5'
			}
		};
	});
	pokemon.set(loadedPokemon);
};
fetchPokemon();
