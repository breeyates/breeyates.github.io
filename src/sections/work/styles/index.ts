import styled from "styled-components";
import { colors } from "../../../styles";

export const WorkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 48px;
`;

export const SideLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  gap: 16px;
  transform-origin: bottom center;
`;

export const Line = styled.div`
 width: 3px;
 flex: 1;
 background-color: ${colors.black};
`;

export const RotatedText = styled.div`
  writing-mode: sideways-lr; 
  white-space: nowrap;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 62px;
  height: 100%;
`;

export const PositionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const PositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const CompanyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;
