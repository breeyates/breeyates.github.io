import styled from "styled-components";
import { colors } from "../../../styles";

export const HeaderContainer = styled.div`
  background-color: ${colors.black};
  width: 100%;
  height: 600px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 36px;
  box-sizing: border-box;
`;

export const SubTextContainer = styled.div`
 margin-top: auto;
 display: flex;
 align-items: flex-end;
 flex-direction: column;
 gap: 20px;
 overflow: auto;
 max-width: 60%;
`;

export const cursorSx = (x: any, y: any):React.CSSProperties => ({
    height: '200px',
    width: '200px',
    top: y - 100,
    left: x - 100,
    backgroundColor: colors.white,
    filter: 'blur(5px)',
    borderRadius: '200px',
    position: 'absolute',
});
