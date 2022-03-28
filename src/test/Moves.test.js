import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from '@apollo/react-testing';
import { MOVES } from "../graphql/query";
import Moves from "../components/screens/menus/Moves";

const mocks = [
  {
    request: {
      query: MOVES,
    },
    result: {
      data: {
        moves: {
          results: [
            { name: "pound" }
          ]
        }
      }
    }
  }
];

describe('Move List Test', () => {
  it('render move list', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Moves />
      </MockedProvider>
    );

    expect(screen.getByTestId('circles-loading')).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByTestId('gridMoveList')).toBeTruthy();
    });
  });
});