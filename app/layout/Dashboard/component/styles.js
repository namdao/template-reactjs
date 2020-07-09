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
  iconFlag: {
    width: 20,
    height: 20,
    paddingRight: 7,
  },
};
const ProfileStyle = {
  iconProfile: {
    verticalAlign: 0,
  },
  containerAvatar: {
    padding: 0,
    borderWidth: 0,
  },
  iconAvatar: {
    width: 30,
    height: 20,
  },
};
export { MenuItem, LanguageStyle, ProfileStyle };
