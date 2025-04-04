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
  position: relative;
  overflow: hidden;
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

export const nameSx: React.CSSProperties = {
  fontSize: '260px',
  fontWeight: 400,
  lineHeight: 1,
  position: 'relative',
  zIndex: 2,
};

export const cursorSx = (x: number, y: number):React.CSSProperties => ({
    height: '300px',
    width: '300px',
    top: y - 200,
    left: x - 200,
    backgroundColor: colors.white,
    filter: 'blur(10px)',
    borderRadius: '300px',
    position: 'absolute',
    pointerEvents: 'none',
});
