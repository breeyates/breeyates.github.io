import styled from 'styled-components';
import { colors } from '../../../styles';

interface TabContainerProps {
    selected?: boolean;
  }

export const TabContainer = styled.div<TabContainerProps>`
  user-select: none;
  position: relative;
  padding: 0px 12px;
  &:hover {
    cursor: pointer;
  }
`;