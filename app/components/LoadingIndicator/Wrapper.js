import styled from 'styled-components';
import colors from 'constants/colors';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .ant-spin {
    color: ${colors.dustyOrange};
  }
  .ant-spin-dot-item {
    background-color: ${colors.dustyOrange};
  }
`;

export default Wrapper;
