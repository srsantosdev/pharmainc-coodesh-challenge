import React, { forwardRef } from 'react';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';

import { customStyles } from './styles';

interface SelectProps extends ReactSelectProps {
  name: string;
  multi?: boolean;
  isSearchable?: boolean;
}

const Select: React.ForwardRefRenderFunction<any, SelectProps> = (
  { name, multi, isSearchable = false, ...rest },
  ref,
) => {
  return (
    <ReactSelect
      ref={ref}
      styles={customStyles}
      name={name}
      isSearchable={isSearchable}
      loadingMessage={() => 'Carregando...'}
      noOptionsMessage={() => 'Sem opções disponíveis'}
      placeholder=""
      isMulti={multi}
      {...rest}
    />
  );
};

export default forwardRef(Select);
