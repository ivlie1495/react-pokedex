import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from '@apollo/react-testing';
import { GENDERS } from "../graphql/query";
import Genders from "../components/screens/menus/Genders";

const mocks = [
  {
    request: {
      query: GENDERS,
    },
    result: {
      data: {
        genders: {
          results: [
            { name: "male" },
            { name: "female" }
          ]
        }
      }
    }
  }
];

describe('Gender List Test', () => {
  it('render gender list', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Genders />
      </MockedProvider>
    );
    
    expect(screen.getByTestId('circles-loading')).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByTestId('gridGenderList')).toBeTruthy();
    });
  });
});