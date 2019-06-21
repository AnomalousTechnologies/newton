import React, { InputHTMLAttributes } from 'react';

import styled from 'styled-components';

import SearchIcon from '../icons/search';
import InputSmall from './input-small';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const Input = styled(InputSmall)`
  padding: .5rem 3rem .5rem 1rem;
  border-radius: 19px;
`;

const Icon = styled(SearchIcon)`
  position: absolute;
  top: 11px;
  right: 1rem;
  width: 16px;
  height: 16px;
`;

const Search = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <Wrapper className={className}>
    <Input {...props} />
    <Icon />
  </Wrapper>
);

export default Search;
