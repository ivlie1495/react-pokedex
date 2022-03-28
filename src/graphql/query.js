import { gql } from "@apollo/client";

export const POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        id
        name
        image
      }
    }
  }
`;

export const POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      weight
      height
      stats {
        base_stat
        stat {
          name
        }
      }
      sprites {
        front_default
        back_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      abilities {
        slot
        ability {
          name
        }
      }
    }
  }
`;

export const TYPES = gql`
  query types {
    types {
      results {
        name
      }
    }
  }
`;

export const ABILITIES = gql`
  query abilities {
    abilities {
      results {
        name
      }
    }
  }
`;

export const LOCATIONS = gql`
  query locations {
    locations {
      results {
        name
      }
    }
  }
`;

export const MOVES = gql`
  query moves {
    moves {
      results {
        name
      }
    }
  }
`;

export const GENDERS = gql`
  query genders {
    genders {
      results {
        name
      }
    }
  }
`;