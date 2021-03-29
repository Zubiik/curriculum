import {
    ImageLink,
    PortfolioContainer,
    TextTitle,
    ImageContain,
    CustomPortfolioContainer
  } from "./styled";
  import { mock } from "./mock";
  import ScrollableAnchor from "react-scrollable-anchor";
  
  export default function Portfolio() {
    const projectCallback = () => {
      console.log(":)");
    };
    return (
      <ScrollableAnchor id={"portfolio"}>
        <CustomPortfolioContainer>
          <TextTitle>Portfolio</TextTitle>
          <PortfolioContainer>
            {mock.projet.map((item, index) => {
              return (
                <ImageContain>
                  <ImageLink
                    key={index}
                    onClick={projectCallback}
                    src={item.image}
                  />
                </ImageContain>
              );
            })}
          </PortfolioContainer>
        </CustomPortfolioContainer>
      </ScrollableAnchor>
    );
  }
  