import styled from '@emotion/styled'
import palette from '../../styles/theme';

const Button = styled.button`
  color: ${palette.color.base.white};
  cursor: pointer;
  background-color: ${({ variant }) => palette.color.button[variant]};
  &:hover {
    background-color: ${({ variant }) => palette.color.button[`${variant}Hover`]};
  }
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: 'pointer';
`;

export default Button;