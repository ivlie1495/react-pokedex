import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from '@apollo/react-testing';
import { LOCATIONS } from "../graphql/query";
import Locations from "../components/screens/menus/Locations";

const mocks = [
  {
    request: {
      query: LOCATIONS,
    },
    result: {
      data: {
        locations: {
          results: [
            { name: "stench" }
          ]
        }
      }
    }
  }
];

describe('Location List Test', () => {
  it('render location list', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Locations />
      </MockedProvider>
    );

    expect(screen.getByTestId('circles-loading')).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByTestId('gridLocationList')).toBeTruthy();
    });
  });
});