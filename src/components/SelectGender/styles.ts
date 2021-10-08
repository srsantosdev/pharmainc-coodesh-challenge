import styled from 'styled-components';
import { theme } from '../../global/style/theme';

type GenderButtonProps = {
  isSelected?: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const GenderButton = styled.button<GenderButtonProps>`
  width: 100%;
  height: 4rem;
  border: 1px solid ${theme.colors.black300};
  background: ${props =>
    props.isSelected ? theme.colors.primary : 'transparent'};

  font-size: 1.4rem;
  color: ${props =>
    props.isSelected ? theme.colors.white : theme.colors.gray};

  border-radius: 0.5rem;
`;
