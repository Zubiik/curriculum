import {
    HeaderContainer,
    ImageCustom,
    TextContainer,
    CustomText
  } from "./styled";
  import ScrollableAnchor from "react-scrollable-anchor";
  
  export default function Header({profil}) {
    console.log("coucu", profil);
  

    return (
      <ScrollableAnchor id={"up"}>
        <div>
          <HeaderContainer>
            <TextContainer>
              <CustomText>Elodie Jolie lala</CustomText>
              <CustomText>{profil.bio}</CustomText>
            </TextContainer>
            <ImageCustom src={profil.avatar_url} />
          </HeaderContainer>
        </div>
      </ScrollableAnchor>
    );
  }
  