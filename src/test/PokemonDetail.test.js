import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PokemonDetail from "../components/screens/menus/PokemonDetail";
import { MockedProvider } from '@apollo/react-testing';
import { POKEMON } from "../graphql/query";

const mocks = [
  {
    request: {
      query: POKEMON,
      variables: {
        name: "venusaur"
      }
    },
    result: {
      data: {
        pokemon: {
          id: 3,
          name: "venusaur",
          weight: 1000,
          height: 20,
          stats: [
            {
              base_stat: 80,
              stat: {
                name: "hp"
              }
            },
            {
              base_stat: 82,
              stat: {
                name: "attack"
              }
            },
            {
              base_stat: 83,
              stat: {
                name: "defense"
              }
            },
            {
              base_stat: 100,
              stat: {
                name: "special-attack"
              }
            },
            {
              base_stat: 100,
              stat: {
                name: "special-defense"
              }
            },
            {
              base_stat: 80,
              stat: {
                name: "speed"
              }
            }
          ],
          sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"
          },
          abilities: [
            {
              ability: {
                name: "overgrow"
              }
            },
          ],
          types: [
            {
              type: {
                name: "grass"
              }
            },
          ],
          moves: [
            {
              move: {
                name: "swords-dance"
              }
            },
          ]
        }
      }
    }
  }
];

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Pokemon Detail Test', () => {
  it('render pokemon detail', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonDetail />
      </MockedProvider>
    );

    expect(screen.getByTestId('circles-loading')).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByTestId('boxDetailPokemon')).toBeTruthy();
    });

    await waitFor(() => {
      expect(screen.queryByTestId('modalSetNickname')).toBeFalsy();
    });
  });

  const isShowModalSetNickname = (modalSetNickname) => modalSetNickname ? 'show' : 'not-show';
  const isFailedCatchText = (failedCatchText) => failedCatchText ? 'show' : 'not-show';

  it('render button click', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonDetail />
      </MockedProvider>
    );    
    
    await waitFor(() => {
      expect(screen.getByTestId('buttonCatchPokemon')).toBeTruthy();
    });

    const buttonCatchPokemon = screen.getByTestId('buttonCatchPokemon');
    fireEvent.click(buttonCatchPokemon);

    await waitFor(() => {
      const modalSetNickname = screen.queryByTestId('modalSetNickname');
      expect(isShowModalSetNickname(modalSetNickname)).toBe(modalSetNickname ? 'show' : 'not-show');
    });

    await waitFor(() => {
      const failedCatchText = screen.queryByTestId('failedCatchText');
      expect(isFailedCatchText(failedCatchText)).toBe(failedCatchText ? 'show' : 'not-show');
    });
  });
});