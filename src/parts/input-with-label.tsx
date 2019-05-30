import React from 'react';

import { UID } from 'react-uid';

import Input from '../bolts/inputs/input';
import Label from '../bolts/inputs/label';
import Textarea from '../bolts/inputs/textarea';

type InputType = 'date' | 'datetime-local' | 'email' | 'file' |
'hidden' | 'month' | 'number' | 'password' | 'search' | 'tel' |
'text' | 'time' | 'url' | 'week';

interface Props {
  className?: string;
  label: string;
  name: string;
  onChange: (event: any) => void;
  onEnterKeyPress?: (event: any) => void;
  onKeyPress?: (event: any) => void;
  placeholder?: string;
  style?: object;
  type?: InputType | 'textarea';
  value?: string;
}

const InputWithLabel = ({
  className,
  label,
  name,
  onChange,
  onEnterKeyPress,
  onKeyPress,
  placeholder,
  style,
  type,
  value,
}: Props) => (
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
            rows={10}
            value={value}
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
          />}
      </div>
    )}
  </UID>
);

InputWithLabel.defaultProps = {
  type: 'text',
};

export default InputWithLabel;
