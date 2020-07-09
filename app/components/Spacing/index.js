import styled from 'styled-components';

const Spacing = styled.div`
  display: flex;
  width: ${(props) => props.width || '20px'};
  height: ${(props) => props.height || '20px'};
`;

export default Spacing;
