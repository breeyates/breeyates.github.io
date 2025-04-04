import styled from "styled-components";
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
  max-width: 100%;
`;

export const ScrollWrapperInner = styled.div`
  padding-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const textSx = {
  fontSize: "72px",
  fontWeight: 500,
  textTransform: "uppercase",
  paddingRight: '2rem',
}