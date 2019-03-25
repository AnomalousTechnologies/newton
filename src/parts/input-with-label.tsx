import React from 'react';

import PropTypes from 'prop-types';
import { UID } from 'react-uid';

import Input from '../bolts/input';
import Label from '../bolts/label';
import Textarea from '../bolts/textarea';

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
  type,
  value,
}: Props) => (
  <UID>
    {(id) => (
      <div className={className}>
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

InputWithLabel.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEnterKeyPress: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default InputWithLabel;
