import React, { InputHTMLAttributes } from 'react';

import styled, { keyframes } from 'styled-components';

import SearchIcon from '../icons/search';
import SpinnerIcon from '../icons/spinner';
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

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const Spinner = styled(SpinnerIcon)`
  position: absolute;
  top: 11px;
  right: 1rem;
  width: 16px;
  height: 16px;
  animation: 1s ${spinAnimation} infinite linear;
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isSearching?: boolean;
}

const Search = ({ className, isSearching, ...props }: Props) => (
  <Wrapper className={className}>
    <Input {...props} />
    {isSearching ? <Spinner /> : <Icon />}
  </Wrapper>
);

export default Search;
