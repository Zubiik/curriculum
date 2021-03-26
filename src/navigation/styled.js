import styled from "@emotion/styled";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 20px;
  width: 10%;
  position: fixed;
  left: 0%;
  border-radius: 5px;
`;
export const NavButton = styled.div`
  display: flex;
  text-decoration: none;
  font-size: 20px;
  border: none;
  border-radius: 5px;
`;

export const CustomButton = styled.div`
  :hover {
    transform: scale(1.2);
  }
`;
