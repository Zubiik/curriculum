import { ContactContainer, TextContainer, TitleContainer } from "./styled";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

export default function Contact() {
  return (
    <ContactContainer>
      <TitleContainer>Me contacter</TitleContainer>

      <TextContainer>
        <MailOutlineIcon />
        email@email.com
      </TextContainer>
      <TextContainer>
        <PhoneIcon />
        05 06 05 04 12
      </TextContainer>
      <TextContainer>
        <GitHubIcon href="https://github.com/"></GitHubIcon>
        <LinkedInIcon />
      </TextContainer>
    </ContactContainer>
  );
}
