import styled from '@emotion/styled';

export const Heading = styled('h1')`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  margin: 0px;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  text-decoration: none;
`;

export const SubHeading = Heading.withComponent('h2');

export const BodyText = Heading.withComponent('p');
