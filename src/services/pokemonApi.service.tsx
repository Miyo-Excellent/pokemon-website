import axios from "axios";

export interface PokemonRequestOptions {
  limit?: number;
  offset?: number;
}

export const POKEMON_API_VERSION: string = "v2";
export const POKEMON_API_BASE_URL: string = `https://pokeapi.co/api/${POKEMON_API_VERSION}`;

export const pokemonRequest = async (
  url: string,
  { limit, offset }: PokemonRequestOptions = { limit: 50, offset: 0 },
) =>
  axios.get(`${POKEMON_API_BASE_URL}/${url}`, {
    params: { limit, offset },
  });

export const pokemonAPI = {
  berry: {
    all: async (options: PokemonRequestOptions = {}) =>
      pokemonRequest(`/berry`, options),
    one: async (id: number, options: PokemonRequestOptions = {}) =>
      pokemonRequest(`/berry/${id}`, options),
    firmness: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/berry-firmness`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/berry-firmness/${id}`, options),
    },
    flavors: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/berry-flavor`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/berry-flavor/${id}`, options),
    },
  },
  contest: {
    type: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/contest-type`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/contest-type/${id}`, options),
    },
    effect: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/contest-effect`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/contest-effect/${id}`, options),
    },
    superEffect: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/super-contest-effect`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/super-contest-effect/${id}`, options),
    },
  },
  encounter: {
    method: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/encounter-method`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/encounter-method/${id}`, options),
    },
    condition: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/encounter-condition`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/encounter-condition/${id}`, options),
      values: {
        all: async (options: PokemonRequestOptions = {}) =>
          pokemonRequest(`/encounter-condition-value`, options),
        one: async (id: number, options: PokemonRequestOptions = {}) =>
          pokemonRequest(`/encounter-condition-value/${id}`),
      },
    },
  },
  evolution: {
    method: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/evolution-chain`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/evolution-chain/${id}`, options),
    },
    condition: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/evolution-trigger`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/evolution-trigger/${id}`, options),
    },
  },
  game: {
    generation: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/generation`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/generation/${id}`, options),
    },
    pokedex: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pokedex`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pokedex/${id}`, options),
    },
    version: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/version`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/version/${id}`, options),
    },
    group: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/version-group`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/version-group/${id}`, options),
    },
  },
  item: {
    all: async (options: PokemonRequestOptions = {}) =>
      pokemonRequest(`/item`, options),
    one: async (id: number, options: PokemonRequestOptions = {}) =>
      pokemonRequest(`/item/${id}`, options),
    attribute: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/item-attribute`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/item-attribute/${id}`, options),
    },
    category: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/item-category`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/item-category/${id}`, options),
    },
    flingEffect: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/item-fling-effect`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/item-fling-effect/${id}`, options),
    },
    pocket: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/item-pocket`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/item-pocket/${id}`, options),
    },
  },
  location: {
    all: async (options: PokemonRequestOptions = {}) =>
      pokemonRequest(`/location`, options),
    one: async (id: number, options: PokemonRequestOptions = {}) =>
      pokemonRequest(`/location/${id}`, options),
    area: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/location-area`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/location-area/${id}`, options),
    },
    palParkArea: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pal-park-area`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pal-park-area/${id}`, options),
    },
    flingEffect: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/item-fling-effect`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/item-fling-effect/${id}`, options),
    },
    region: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/region`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/region/${id}`, options),
    },
  },
  machine: {
    all: async (options: PokemonRequestOptions = {}) =>
      pokemonRequest(`/machine`, options),
    one: async (id: number, options: PokemonRequestOptions = {}) =>
      pokemonRequest(`/machine/${id}`, options),
  },
  move: {
    all: async (options: PokemonRequestOptions = {}) =>
      pokemonRequest(`/move`, options),
    one: async (id: number, options: PokemonRequestOptions = {}) =>
      pokemonRequest(`/move/${id}`, options),
    ailment: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/move-ailment`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/move-ailment/${id}`, options),
    },
    battleStyle: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/move-battle-style`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/move-battle-style/${id}`, options),
    },
    category: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/move-category`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/move-category/${id}`, options),
    },
    damageClass: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/move-damage-class`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/move-damage-class/${id}`, options),
    },
    learnMethod: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/move-learn-method`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/move-learn-method/${id}`, options),
    },
    target: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/move-target`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/move-target/${id}`, options),
    },
  },
  pokemon: {
    all: async (options: PokemonRequestOptions = {}) =>
      pokemonRequest(`/pokemon`, options),
    one: async (
      idOrName: number | string,
      options: PokemonRequestOptions = {},
    ) => pokemonRequest(`/pokemon/${idOrName}`, options),
    ability: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/ability`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/ability/${id}`, options),
    },
    characteristic: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/characteristic`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/characteristic/${id}`, options),
    },
    eggGroup: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/egg-group`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/egg-group/${id}`, options),
    },
    gender: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/gender`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/gender/${id}`, options),
    },
    growthRate: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/growth-rate`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/growth-rate/${id}`, options),
    },
    nature: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/nature`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/nature/${id}`, options),
    },
    pokeathlonStat: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pokeathlon-stat`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pokeathlon-stat/${id}`, options),
    },
    encounters: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/encounters`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/encounters/${id}`, options),
    },
    color: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pokemon-color`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pokemon-color/${id}`, options),
    },
    form: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pokemon-form`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pokemon-form/${id}`, options),
    },
    habitat: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pokemon-habitat`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pokemon-habitat/${id}`, options),
    },
    shape: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pokemon-shape`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pokemon-shape/${id}`, options),
    },
    species: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pokemon-species`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/pokemon-species/${id}`, options),
    },
    stat: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/stat`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/stat/${id}`, options),
    },
    type: {
      all: async (options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/type`, options),
      one: async (id: number, options: PokemonRequestOptions = {}) =>
        pokemonRequest(`/type/${id}`, options),
    },
  },
};
