import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from '@apollo/react-testing';
import { TYPES } from "../graphql/query";
import Types from "../components/screens/menus/Types";

const mocks = [
  {
    request: {
      query: TYPES,
    },
    result: {
      data: {
        types: {
          results: [
            { name: "normal" }
          ]
        }
      }
    }
  }
];

describe('Type List Test', () => {
  it('render type list', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Types />
      </MockedProvider>
    );

    expect(screen.getByTestId('circles-loading')).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByTestId('gridTypeList')).toBeTruthy();
    });
  });
});