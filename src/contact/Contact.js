import { ContactContainer, CustomTextBox, TextContainer, LinkGit, TitleContainer } from "./styled";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

export default function Contact() {

  const handlePageGithub = (onClick) => {
window.location.href="https://github.com/Zubiik"
}
 const handlePageLinkedin = (onClick) => {
window.location.href="https://fr.linkedin.com/"
}


  return (
    <ContactContainer>
      <TitleContainer>Me contacter</TitleContainer>
      <CustomTextBox>
      <TextContainer>
        <MailOutlineIcon />
        email@email.com
      </TextContainer>
      <TextContainer>
        <PhoneIcon />
        05 06 05 04 12
      </TextContainer>
      <TextContainer>
       <GitHubIcon onClick={handlePageGithub} />
        <LinkedInIcon onClick={handlePageLinkedin} />
      </TextContainer>
      </CustomTextBox>
    </ContactContainer>
  );
}
