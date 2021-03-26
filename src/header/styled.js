import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageCustom = styled.img`
  border: none;
  border-radius: 80px;
  text-decoration: none;
  width: 150px;
  height: 150px;
  margin: 40px;
`;

export const TextContainer = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CustomText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.title};
`;
