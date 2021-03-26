import {
    NavContainer,
    NavButton,
    CustomFab,
    TextButton,
    CustomButton
  } from "./styled";
  
  export default function Nav() {
    return (
      <NavContainer>
        <CustomButton variant="contained">
          <a href="#formation">
            <p>Formation</p>
          </a>
        </CustomButton>
        <CustomButton variant="contained">
          <a href="#portfolio">
            <p>PortFolio</p>
          </a>
        </CustomButton>
  
        <CustomButton variant="contained">
          <a href="#aPropos">
            <p>Experiences</p>
          </a>
        </CustomButton>
      </NavContainer>
    );
  }
  