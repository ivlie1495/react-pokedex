import styled from '@emotion/styled'
import palette from '../../styles/theme';

const TextField = styled.input`
  display: block;
  border: 1px solid ${palette.color.pokemon.water};
  width: 100%;
  height: 30px;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 16px;
  background-color: ${palette.color.base.gray};
`;

export default TextField;