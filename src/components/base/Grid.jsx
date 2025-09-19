import styled from '@emotion/styled'

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
);

const Grid = styled('div')`
  display: grid;
  ${mq[0]} {
    grid-template-columns: auto auto;
  }
  ${mq[1]} {
    grid-template-columns: auto auto auto;
  }
  ${mq[2]} {
    grid-template-columns: auto auto auto auto;
  }
  ${mq[3]} {
    grid-template-columns: auto auto auto auto auto;
  }
  gap: 10px;
`;

export default Grid;