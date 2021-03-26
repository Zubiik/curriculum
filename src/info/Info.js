import { UpContainer, CustomInfo } from "./styled";

export default function Info({ onOffCallback }) {
  console.log(onOffCallback);
  return (
    <UpContainer onClick={onOffCallback}>
      <CustomInfo style={{ fontSize: 40 }} />
    </UpContainer>
  );
}