import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MockedProvider } from '@apollo/react-testing';
import { POKEMONS } from "../graphql/query";
import Pokemon from "../components/screens/menus/Pokemon";

const mocks = [
  {
    request: {
      query: POKEMONS,
      variables: {
        limit: 100,
        offset: 1,
      }
    },
    result: {
      data: {
        pokemons: {
          count: 1126,
          results: [
            {
              id: 2,
              name: "ivysaur",
              image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
            },
            {
              id: 3,
              name: "venusaur",
              image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
            }
          ]
        }
      }
    }
  }
];

describe('Pokemon List Test', () => {
  it('render pokemon list', async () => {
    render(
      <BrowserRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Pokemon />
        </MockedProvider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('circles-loading')).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByTestId('gridPokemonList')).toBeTruthy();
    });
  });
});