import styled from "styled-components";
import { colors } from "../../../styles";

export const ProjectsContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: row;
  gap: 48px;
  background-color: ${colors.grey};
  margin-left: -48px;
  margin-right: -48px;
  padding: 48px;
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
 background-color: ${colors.white};
`;

export const RotatedText = styled.div`
  writing-mode: sideways-lr; 
  white-space: nowrap;
`;


export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  height: 100%;
`;

export const ButtonBox = styled.div`
  margin-left: auto;
  margin-top: auto;
`;