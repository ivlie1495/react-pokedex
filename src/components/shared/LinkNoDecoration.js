/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from "react-router-dom";

const LinkNoDecoration = ({ to, children }) => {
  return (
    <Link to={to} css={css({ textDecoration: 'none' })}>
      {children}
    </Link>
  );
};

export default LinkNoDecoration;