import React from 'react';

import styled from 'styled-components';

import Input from './input-small';

const StyledInput = styled(Input)`
  line-height: 1.3rem;
  overflow: auto;
`;

const Textarea = ({ ...props }) => (<StyledInput as="textarea" {...props} />);

export default Textarea;
