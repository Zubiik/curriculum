import styled from "@emotion/styled";

export const CustomDescritptionContainer = styled.div`
height:710px;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;


export const DescriptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  max-height: 700px;
`;

export const BoxContainer = styled.div`
  max-width: 40%;
  max-height: 30%;
  display: flex;
  margin: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`;

export const DateContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  min-width: 80px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 8px;
`;

export const TextContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const TextTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.title};
`;

