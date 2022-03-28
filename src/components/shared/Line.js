/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const Line = ({ color }) => {
  return (
    <hr css={css({ backgroundColor: color, height: 5 })} />
  );
};

export default Line;