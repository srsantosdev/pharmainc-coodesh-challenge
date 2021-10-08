import { StylesConfig } from 'react-select';
import { theme } from '../../global/style/theme';

export const customStyles: StylesConfig = {
  control: (styles: any) => ({
    ...styles,
    height: 40,
    backgroundColor: theme.colors.background,
    borderRadius: 5,
    borderColor: theme.colors.black300,
    borderWidth: 1,
    paddingLeft: 4,
    paddingRight: 4,
    ':hover': {
      borderColor: theme.colors.black300,
    },
    ':focus-within': {
      border: 0,
    },
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: theme.colors.gray,
    fontFamily: theme.fonts.primary,
  }),
  indicatorSeparator: () => ({
    opacity: 0,
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: theme.colors.black500,
  }),
  option: provided => ({
    ...provided,
    fontFamily: theme.fonts.primary,
    color: theme.colors.white,
    backgroundColor: 'transparent',
    ':hover': {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
    },
  }),
};
