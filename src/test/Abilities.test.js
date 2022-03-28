import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from '@apollo/react-testing';
import { ABILITIES } from "../graphql/query";
import Abilities from "../components/screens/menus/Abilities";

const mocks = [
  {
    request: {
      query: ABILITIES,
    },
    result: {
      data: {
        abilities: {
          results: [
            { name: "stench" }
          ]
        }
      }
    }
  }
];

describe('Ability List Test', () => {
  it('render ability list', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Abilities />
      </MockedProvider>
    );

    expect(screen.getByTestId('circles-loading')).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByTestId('gridAbilityList')).toBeTruthy();
    });
  });
});