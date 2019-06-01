import React from 'react';

import styled from 'styled-components';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const H1 = ({ className, children }: Props) => (
  <h1 className={className}>{children}</h1>
);

export default styled(H1)`
  margin: 2.5rem 0 2rem;
  color: ${(props) => props.theme.text.color};
  font-family: ${(props) => props.theme.font.family.sans};
  font-size: 1.73rem;
  font-weight: 600;
  line-height: 1.3;
`;
