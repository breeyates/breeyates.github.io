import styled from "styled-components";

export const ImageContainer = styled.div.attrs<{
   sx?: React.CSSProperties;
 }>(({ sx }) => ({
   style: sx,
 }))`
   display: flex;
   overflow: hidden;
   gap: 12px;
   width: 100%;
   flex: 1;
 `;

export const imageSx = (selected?: boolean, width?: string): React.CSSProperties => ({
  borderRadius: '12px',
  transition: 'width 0.4s ease',
  overflow: 'hidden',
  maxHeight: "100%",
  width: selected ? (width || '500px') : '90px',
  objectFit: 'cover',
  flexShrink: 0,
 });