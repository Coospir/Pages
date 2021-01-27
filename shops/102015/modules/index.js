import styled from '../../../node_modules/styled-components';

console.log(styled);

const Container = styled.div`
  width: 300px;
  height: 300px;
`;

document
  .querySelector('.custom_section')
  .insertAdjacentHTML('beforeend', `<${Container}></${Container}>`);
