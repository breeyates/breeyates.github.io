import styled, { keyframes } from "styled-components";
import { colors } from "../../../styles";

export const SkillsContainer = styled.div`
  height: 125px;
  display: flex;
  flex-direction: row;
  gap: 48px;
  background-color: ${colors.black};
  margin-left: -48px;
  margin-right: -48px;
  margin-bottom: -62px;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;

export const ScrollWrapper = styled.div`
  display: flex;
  min-width: 200%;
`;

const scrollLeftToRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const ScrollText = styled.div`
  display: inline-block;
  animation: ${scrollLeftToRight} 100s linear infinite;
  font-size: 1.25rem;
  color: white;
  align-content: center;
`;

export const textSx = {
  fontSize: "72px",
  fontWeight: 500,
  textTransform: "uppercase",
  paddingRight: '2rem',
}