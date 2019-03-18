import * as React from 'react';

import { shallow } from 'enzyme';

import {
  Button,
  Input,
  InputWithLabel,
  Label,
  Textarea,
} from '../src/index';

describe('Index', () => {
  it('Can import a button', () => {
    expect(shallow(<Button />)).toBeTruthy();
  });

  it('Can import a input', () => {
    expect(shallow(<Input />)).toBeTruthy();
  });

  it('Can import a label', () => {
    expect(shallow(<Label />)).toBeTruthy();
  });

  it('Can import a textarea', () => {
    expect(shallow(<Textarea />)).toBeTruthy();
  });

  it('Can import a input with label', () => {
    expect(shallow(<InputWithLabel />)).toBeTruthy();
  });
});
