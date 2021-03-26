import {
    SkillsContainer,
    TextTitle,
    Bar,
    BarContainer,
    TextBarContainer,
    Textcustom
  } from "./styled";
  import { mock } from "./mock";
  import ScrollableAnchor from "react-scrollable-anchor";
  
  export default function Professional() {
    return (
      <ScrollableAnchor id={"formation"}>
        <div>
          <TextTitle>Compétences</TextTitle>
          <SkillsContainer>
            {mock.xp.map((item, index) => {
              return (
                <TextBarContainer key={index}>
                  <Textcustom>{item.skill} </Textcustom>
                  <BarContainer>
                    <Bar percent={item.percent} />
                  </BarContainer>
                  <Textcustom marginLeft>{item.viewPercent}</Textcustom>
                </TextBarContainer>
              );
            })}
          </SkillsContainer>
        </div>
      </ScrollableAnchor>
    );
  }
  