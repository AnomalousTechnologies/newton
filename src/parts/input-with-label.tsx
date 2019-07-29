import React from 'react';

import { UID } from 'react-uid';
import styled from 'styled-components';

import CheckCircleIcon from '../bolts/icons/check-circle';
import CrossCircleIcon from '../bolts/icons/cross-circle';
import InputLarge from '../bolts/inputs/input-large';
import InputSmall from '../bolts/inputs/input-small';
import LabelBase from '../bolts/inputs/label';
import Textarea from '../bolts/inputs/textarea';
import Small from '../bolts/typography/small';

const ValidIcon = styled(CheckCircleIcon)`
  position: relative;
  top: 3px;
  width: 1rem;
  height: 1rem;
  float: right;
  color: ${({ theme }) => theme.color.select.grass};
`;

const InvalidIcon = styled(CrossCircleIcon)`
  position: relative;
  top: 3px;
  width: 1rem;
  height: 1rem;
  float: right;
  color: ${({ theme }) => theme.color.select.brick};
`;

const Label = styled(LabelBase)`
  margin-bottom: .5rem;
`;

const Caption = styled(Small)`
  display: inline-block;
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
  isValid?: boolean;
  name: string;
  onChange: (event: React.ChangeEvent<Target>) => void;
  onEnterKeyPress?: (event: React.KeyboardEvent) => void;
  onKeyPress?: (event: React.KeyboardEvent) => void;
  placeholder?: string;
  ref?: React.RefObject<HTMLInputElement>;
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
  isValid,
  name,
  onChange,
  onEnterKeyPress,
  onKeyPress,
  placeholder,
  ref,
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
          <Label htmlFor={`a-text-input-${id}`}>
            {label}
            {(() => {
              if (typeof isValid === 'undefined') {
                return null;
              }
              return isValid ?
                <ValidIcon /> :
                <InvalidIcon />;
            })()}
          </Label>
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
              ref={ref}
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
              ref={ref}
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
