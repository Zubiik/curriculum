import { CustomFab, UpContainer, CustomArrow } from "./styled";

export default function UpButton() {
  return (
    <UpContainer>
      <CustomFab>
        <a href="#up">
          <CustomArrow />
        </a>
      </CustomFab>
    </UpContainer>
  );
}
