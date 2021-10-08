import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';

import { Filter } from '../Filter';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  activeFilter?: boolean;
}

export const Input: React.FC<InputProps> = ({
  activeFilter = false,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      <input
        ref={inputRef}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />

      {activeFilter && <Filter />}
    </Container>
  );
};
