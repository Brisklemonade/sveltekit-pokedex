export interface SinglePokemon {
	id?: number;
	name?: string;
	order?: number;
	baseHappiness?: number;
	captureRate?: number;
	color?: string;
	eggGroups?: [];
	evolutionChain?: Record<string, unknown>;
	evolvesFromSpecies?: unknown;
	description?: string;
	formDescriptions?: [];
	formsSwitchable?: boolean;
	genderRate?: number;
	genera?: string;
	generation?: string;
	growthRate?: string;
	habitat?: string;
	hasGenderDifferences?: boolean;
	hatchCounter?: number;
	isBaby?: boolean;
	isLegendary?: boolean;
	isMythical?: boolean;
	languageNames?: ObjArray;
	palParkEncounters?: ObjArray;
	pokedexNumbers?: ObjArray;
	shape?: string;
	varieties?: ObjArray;
}

export type AboutData = {
	property: string | any[];
	title: string;
	icon?: unknown;
	id: number;
};

export type StatsData = { title: string; base: number; abbr: string };
export type ObjArray = Record<string, unknown>;
