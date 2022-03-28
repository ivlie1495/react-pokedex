import styled from '@emotion/styled'

const Box = styled('div')`
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin: ${({ margin }) => margin ? `${margin}px` : null};
  padding: ${({ padding }) => padding ? `${padding}px` : null};
  padding-top: ${({ paddingTop }) => paddingTop ? `${paddingTop}px` : null};
  padding-bottom: ${({ paddingBottom }) => paddingBottom ? `${paddingBottom}px` : null};
  padding-left: ${({ paddingLeft }) => paddingLeft ? `${paddingLeft}px` : null};
  padding-right: ${({ paddingRight }) => paddingRight ? `${paddingRight}px` : null};
  display: ${({ display }) => display ? display : 'block'};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-grow: ${({ flexGrow }) => flexGrow};
  gap: ${({ gap }) => gap ? `${gap}px` : null};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-radius: ${({ borderRadius }) => borderRadius ? `${borderRadius}px` : null};
  border-bottom-left-radius: ${({ borderBottomLeftRadius }) => borderBottomLeftRadius ? `${borderBottomLeftRadius}px` : null};
  border-bottom-right-radius: ${({ borderBottomRightRadius }) => borderBottomRightRadius ? `${borderBottomRightRadius}px` : null};
  border-top-left-radius: ${({ borderTopLeftRadius }) => borderTopLeftRadius ? `${borderTopLeftRadius}px` : null};
  border-top-right-radius: ${({ borderTopRightRadius }) => borderTopRightRadius ? `${borderTopRightRadius}px` : null};
  cursor: ${({ cursor }) => cursor};
`;

export default Box;