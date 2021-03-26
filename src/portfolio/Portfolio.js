import {
    ImageLink,
    PortfolioContainer,
    TextTitle,
    ImageContain
  } from "./styled";
  import { mock } from "./mock";
  import ScrollableAnchor from "react-scrollable-anchor";
  
  export default function Portfolio() {
    const projectCallback = () => {
      console.log(":)");
    };
    return (
      <ScrollableAnchor id={"portfolio"}>
        <div>
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
        </div>
      </ScrollableAnchor>
    );
  }
  