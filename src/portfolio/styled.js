import styled from "@emotion/styled";

export const ImageLink = styled.img`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  :hover {
    transform: scale(1.2);
  }
  transition: all 0.5s;
`;

export const PortfolioContainer = styled.div`
  display: flex;
  margin: 70px;
  border: solid blue 1px;
  justify-content: center;
  display: flex;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.7);
`;
export const ImageContain = styled.div`
  max-width: 200px;
  max-height: 200px;
  overflow: hidden;
`;

export const TextTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.title};
`;
