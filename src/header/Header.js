import {
    HeaderContainer,
    ImageCustom,
    TextContainer,
    CustomText
  } from "./styled";
  import ScrollableAnchor from "react-scrollable-anchor";
  
  export default function Header() {
    return (
      <ScrollableAnchor id={"up"}>
        <div>
          <HeaderContainer>
            <TextContainer>
              <CustomText>Elodie Jolie</CustomText>
              <CustomText>cv dev</CustomText>
            </TextContainer>
            <ImageCustom src="https://image.shutterstock.com/shutterstock/photos/1606121245/display_1500/stock-photo-happy-young-indian-woman-blogger-applicant-teacher-sit-at-home-office-look-at-camera-doing-online-1606121245.jpg" />
          </HeaderContainer>
        </div>
      </ScrollableAnchor>
    );
  }
  