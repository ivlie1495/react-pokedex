/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import palette from '../../styles/theme';

const SeacrhTextField = (props) => (
  <input
    type="password"
    css={css`
      display: block;
      width: 100%;
      border-radius: 20px;
      padding: 16px 20px;
      border: none;
      background-color: ${palette.color.base.gray};
      font-size: 16px;
    `}
    {...props}
  />
);

export default SeacrhTextField;