import * as React from 'react';

import { shallow } from 'enzyme';

import {
  Button,
  Code,
  H1,
  H2,
  H3,
  H4,
  Hr,
  Img,
  Input,
  InputWithLabel,
  Label,
  Link,
  ListItem,
  ListOrdered,
  ListUnordered,
  Optgroup,
  Option,
  P,
  Pre,
  Select,
  Small,
  Strong,
  Sub,
  Sup,
  Textarea,
} from '../src/index';

describe('Index', () => {
  it('Can import Button', () => {
    expect(shallow(<Button />)).toBeTruthy();
  });

  it('Can import Code', () => {
    expect(shallow(<Code />)).toBeTruthy();
  });

  it('Can import H1', () => {
    expect(shallow(<H1 />)).toBeTruthy();
  });

  it('Can import H2', () => {
    expect(shallow(<H2 />)).toBeTruthy();
  });

  it('Can import H3', () => {
    expect(shallow(<H3 />)).toBeTruthy();
  });

  it('Can import H4', () => {
    expect(shallow(<H4 />)).toBeTruthy();
  });

  it('Can import Hr', () => {
    expect(shallow(<Hr />)).toBeTruthy();
  });

  it('Can import Img', () => {
    expect(shallow(<Img />)).toBeTruthy();
  });

  it('Can import Input', () => {
    expect(shallow(<Input />)).toBeTruthy();
  });

  it('Can import InputWithLabel', () => {
    expect(shallow(<InputWithLabel label="Foo" name="foo" onChange={() => undefined} />)).toBeTruthy();
  });

  it('Can import Label', () => {
    expect(shallow(<Label />)).toBeTruthy();
  });

  it('Can import Link', () => {
    expect(shallow(<Link />)).toBeTruthy();
  });

  it('Can import ListItem', () => {
    expect(shallow(<ListItem />)).toBeTruthy();
  });

  it('Can import ListOrdered', () => {
    expect(shallow(<ListOrdered />)).toBeTruthy();
  });

  it('Can import ListUnordered', () => {
    expect(shallow(<ListUnordered />)).toBeTruthy();
  });

  it('Can import Optgroup', () => {
    expect(shallow(<Optgroup />)).toBeTruthy();
  });

  it('Can import Option', () => {
    expect(shallow(<Option />)).toBeTruthy();
  });

  it('Can import P', () => {
    expect(shallow(<P />)).toBeTruthy();
  });

  it('Can import Pre', () => {
    expect(shallow(<Pre />)).toBeTruthy();
  });

  it('Can import Select', () => {
    expect(shallow(<Select />)).toBeTruthy();
  });

  it('Can import Small', () => {
    expect(shallow(<Small />)).toBeTruthy();
  });

  it('Can import Strong', () => {
    expect(shallow(<Strong />)).toBeTruthy();
  });

  it('Can import Sub', () => {
    expect(shallow(<Sub />)).toBeTruthy();
  });

  it('Can import Sup', () => {
    expect(shallow(<Sup />)).toBeTruthy();
  });

  it('Can import Textarea', () => {
    expect(shallow(<Textarea />)).toBeTruthy();
  });

});
