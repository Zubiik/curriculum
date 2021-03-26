import ScrollableAnchor from "react-scrollable-anchor";
import {
  DescriptionContainer,
  BoxContainer,
  DateContainer,
  TextContainer,
  TextTitle
} from "./styled";

export default function Description() {
  return (
    <ScrollableAnchor id={"aPropos"}>
      <div>
        <TextTitle>Experiences</TextTitle>
        <DescriptionContainer>
          <BoxContainer>
            <DateContainer>2017 2018</DateContainer>
            <TextContainer>
              brièvement vos jobs étudiants Si vous êtes expérimentéqui
              témoignent d’une première connaissance pratique du monde
              professionnel.
            </TextContainer>
          </BoxContainer>
          <BoxContainer>
            <DateContainer>2017 2018</DateContainer>
            <TextContainer>
              {" "}
              Si vous êtes expérimentéSi vous êtes expérimenté, toutes vos
              expériences ne sont pas nécessairement en cohérence avec l’emploi
              recherché.
            </TextContainer>
          </BoxContainer>
          <BoxContainer>
            <DateContainer>2017 2018</DateContainer>
            <TextContainer>
              Valorisez notamment vos expériences dans des métiers et/ou des
              secteurs d’activité similaires qui témoignent ainsi de votre
              savoir-faire. Décrivez votre parcours « normalement ».
            </TextContainer>
          </BoxContainer>
          <BoxContainer>
            <DateContainer>2017 2018</DateContainer>
            <TextContainer>
              Vous aurez l’occasion d’expliquer cette réorientation ailleurs
              dans votre candidature, notamment dans votre lettre de motivation
              .
            </TextContainer>
          </BoxContainer>
        </DescriptionContainer>
      </div>
    </ScrollableAnchor>
  );
}
