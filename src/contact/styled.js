import styled from "@emotion/styled";


export const ContactContainer = styled.div`
  display: flex;
  padding:10px;
  align-items: center;
  color: white;
  position: fixed;
  right: 20px;
  top: 100px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.35);
  background:${({theme}) => theme.colors.white};
`;

export const TitleContainer = styled.h2`
padding:8px;
  color:${({theme}) => theme.colors.green};

`;
export const TextContainer = styled.p`
padding:5px;`;

export const CustomTextBox = styled.div`
border-radius:5px;
  background:${({theme}) => theme.colors.green};

`;
