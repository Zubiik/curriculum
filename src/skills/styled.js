import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80%;
  width: 650px;
  margin: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`;

export const BarContainer = styled.div`
  max-width: 65%;
  display: flex;
  align-items: center;
`;
export const TextBarContainer = styled.div`
  justify-content: flex-start;
  display: flex;
  margin: 30px;
`;

export const Bar = styled.div`
  height: 10px;
  width: ${({ percent }) => percent + "px"};
  background: ${({ theme }) => theme.colors.orange};
  animation: ${({ percent }) => getLinearAnimation(percent)} 3s linear forwards;
`;

function getLinearAnimation(percent) {
  const load = keyframes`
    from {
      width: 0px;
    }
    to {
      width: ${percent + "px"};
    }
  `;
  return load;
}

export const TextTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.title};
`;

export const Textcustom = styled.div`
  display: flex;
  width: 15%;
  margin-left: ${({ marginLeft }) => (marginLeft ? "20px" : "0")};
`;
