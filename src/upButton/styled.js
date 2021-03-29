import styled from "@emotion/styled";
import Fab from "@material-ui/core/Fab";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

export const CustomFab = styled(Fab)`

`;

export const CustomArrow = styled(ArrowUpwardIcon)`
  color: ${({ theme }) => theme.colors.green};
`;

export const UpContainer = styled.div`
  position: fixed;
  right: 100px;
  bottom: 10px;
`;