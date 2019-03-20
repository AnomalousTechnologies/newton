import styled from '@emotion/styled';

import Input from './input';

const Textarea = styled(Input)`
  overflow: auto;
`;

export default Textarea.withComponent('textarea');
