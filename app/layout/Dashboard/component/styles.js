import styled from 'styled-components';
import colors from 'constants/colors';

const MenuItem = styled.span`
  cursor: pointer;
  &:hover {
    color: ${colors.dustyOrange};
  }
`;
const LanguageStyle = {
  iconLanguage: {
    verticalAlign: 0,
  },
};
export { MenuItem, LanguageStyle };
