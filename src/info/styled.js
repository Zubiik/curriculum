import styled from "@emotion/styled";
import InfoIcon from "@material-ui/icons/Info";

export const CustomInfo = styled(InfoIcon)`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.green};
  position: fixed;
  z-index: 2;
  right: 120px;
  top: 0px;
`;
export const UpContainer = styled.div``;
