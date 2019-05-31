import styled from '@emotion/styled';

import Input from './input-small';

const Textarea = styled(Input)`
  line-height: 1.3rem;
  overflow: auto;
`;

export default Textarea.withComponent('textarea');
