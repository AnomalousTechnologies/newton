import React from 'react';

import { UID } from 'react-uid';
import styled from 'styled-components';

import InputLarge from '../bolts/inputs/input-large';
import InputSmall from '../bolts/inputs/input-small';
import LabelBase from '../bolts/inputs/label';
import Textarea from '../bolts/inputs/textarea';
import Small from '../bolts/typography/small';

const Label = styled(LabelBase)`
  margin-bottom: .5rem;
`;

const Caption = styled(Small)`
  display: inline-block;
  margin-top: .2rem;
`;

type InputType = 'date' | 'datetime-local' | 'email' | 'file' |
'hidden' | 'month' | 'number' | 'password' | 'search' | 'tel' |
'text' | 'time' | 'url' | 'week';

interface Target {
  value: string;
}

interface Props {
  caption?: string;
  className?: string;
  label: string;
  isLarge?: boolean;
  name: string;
  onChange: (event: React.ChangeEvent<Target>) => void;
  onEnterKeyPress?: (event: React.KeyboardEvent) => void;
  onKeyPress?: (event: React.KeyboardEvent) => void;
  placeholder?: string;
  rows?: number;
  style?: object;
  type?: InputType | 'textarea';
  value?: string;
}

const InputWithLabel = ({
  caption,
  className,
  label,
  isLarge,
  name,
  onChange,
  onEnterKeyPress,
  onKeyPress,
  placeholder,
  rows,
  style,
  type,
  value,
  ...props
}: Props) => {
  const Input = isLarge ? InputLarge : InputSmall;
  return (
    <UID>
      {(id) => (
        <div className={className} style={style}>
          <Label htmlFor={`a-text-input-${id}`}>{label}</Label>
          {type === 'textarea' ?
            <Textarea
              id={`a-input-${id}`}
              name={name}
              onChange={onChange}
              onKeyPress={(event: any) => {
                const handleEnterKeyPress = onEnterKeyPress || (() => undefined);
                const handleKeyPress = onKeyPress || (() => undefined);
                if (event.key === 'Enter') {
                  handleEnterKeyPress(event);
                }
                handleKeyPress(event);
              }}
              placeholder={placeholder}
              rows={rows ? rows : 10}
              value={value}
              {...props}
            /> :
            <Input
              id={`a-input-${id}`}
              name={name}
              onChange={onChange}
              onKeyPress={(event: any) => {
                const handleEnterKeyPress = onEnterKeyPress || (() => undefined);
                const handleKeyPress = onKeyPress || (() => undefined);
                if (event.key === 'Enter') {
                  handleEnterKeyPress(event);
                }
                handleKeyPress(event);
              }}
              placeholder={placeholder}
              type={type}
              value={value}
              {...props}
            />}
            {!caption || (<Caption>{caption}</Caption>)}
        </div>
      )}
    </UID>
  );
};

InputWithLabel.defaultProps = {
  type: 'text',
};

export default InputWithLabel;
