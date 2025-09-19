import styled from '@emotion/styled'

const FlexBox = styled('div')`
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => gap ? `${gap}px` : null};
  cursor: ${({ cursor }) => cursor};
`;

export default FlexBox;