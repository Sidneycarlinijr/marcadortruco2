import Image from 'next/image';
import React, { Component } from 'react';
import styled from 'styled-components';
import Clown from '../styles/assets/clown.svg'
import Spades from '../styles/assets/spades.png'
import Hearts from '../styles/assets/hearts.png'
import Clubs from '../styles/assets/clubs.png'
import Diamonds from '../styles/assets/diamonds.png'

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #202124;

  @media (max-width: 750px) {
    position: fixed;
    height: 100%;
    width: 100%;
  }
`;

const CenteredDiv = styled.div`
  background: linear-gradient(#175A5F, #0E4150, #062B41, #042941);
  width: 30rem;
  height: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 750px) {
    height: 100%;
    width: 100%;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 35%;
  flex: none;

  @media (max-width: 750px) {
    height: 30%
  }
`
const Mid = styled.div`
  flex: 1;
  position: relative;
  bottom: 0.3rem;
`
const Bot = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  height: 25%;
  justify-content: center;
  gap: 30px;

  @media (max-height: 700px) {
    position: relative;
    bottom: 1.75rem;
    gap: 1rem;
  }
`
const HomeButton = styled.button`
  width: 20rem;
  height: 3.35rem;
  background-color: #D9B165;
  border: solid 3px #A27946;
  border-radius: 10px;
  cursor: pointer;
  boxShadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  @media (max-height: 700px) {
    width: 18rem;
  }
`

const TopFirstDiv = styled.div`
  display: flex;
  flex: none;
  height: 3rem;
  width: 100%;
  align-items: flex-end;

  @media (max-width: 750px) {
    height: 2.5rem;
  }
`

const TopSecondDiv = styled.div`
  flex: 1;
  display: flex;
  margin-top: 2.5rem;

  @media (max-width: 750px) {
    flex: none;
    height: 6rem;
    margin-top: 1.5rem;
  }
`

const SpadesCenteredFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const MiddleFlexDiv = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 5rem;
`

const LineOnCenterDiv = styled.div`
  display: flex;
  align-items: flex-end;
  flex: none;
  width: 45%;
  height: 100%;
  margin-bottom: 0.5rem;
`;

const Hr = styled.hr`
  border: 1px solid #D9B165;
  width: 100%;
`;

const HeartsContainerFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const CenterDivWithClubs = styled.div`
  display: flex;
  justify-content: center;
  height: 2rem;
  width: 100%;
  position: relative;
  bottom: 0.29rem;
`;

const DivWithText = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: 8px;
  color: #D9B165;
`;

const ClubsImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 0.4rem;
`;

const CardTitle = styled.h2`
  font-size: 3rem;
  color: #D9B165;
  font-weight: normal;
`;

const CardDiamondsContainer = styled.div`
  margin-top: 0.5rem;
`;

const RightBorderOnlyFlexContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2rem;
`;

const RightDivider = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid #D9B165;
  border-right: 1px solid #D9B165;
`;

const LeftBorderOnlyFlexContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2rem;
`;

const LeftDivider = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid #D9B165;
  border-left: 1px solid #D9B165;
`;

const ButtonText = styled.p`
  color: #523D14;
  font-size: 18px;
`;
class Home extends Component {
  render() {
    return (
      <div>
        <HomeContainer>
          <CenteredDiv>
            <Top>
              <TopFirstDiv>
                <SpadesCenteredFlexDiv>
                  <Image src={Spades} alt="spades" width={18} height={23} />
                </SpadesCenteredFlexDiv>
                <LineOnCenterDiv>
                  <Hr />
                </LineOnCenterDiv>
                <HeartsContainerFlexDiv>
                  <Image src={Hearts} alt="hearts" width={20} height={20}/>
                </HeartsContainerFlexDiv>
              </TopFirstDiv>
              <TopSecondDiv>
                <LeftBorderOnlyFlexContainer>
                  <LeftDivider />
                </LeftBorderOnlyFlexContainer>
                <MiddleFlexDiv>
                  <CenterDivWithClubs>
                    <DivWithText>00</DivWithText>
                      <ClubsImageContainer>
                        <Image src={Clubs} alt="cardOfClubs" />
                      </ClubsImageContainer>
                    <DivWithText>12</DivWithText>
                  </CenterDivWithClubs>
                  <div>
                    <CardTitle>TRUCO</CardTitle>
                  </div>
                  <CardDiamondsContainer>
                    <Image src={Diamonds} alt="diamonds" />
                  </CardDiamondsContainer>
                </MiddleFlexDiv>
                <RightBorderOnlyFlexContainer>
                  <RightDivider />
                </RightBorderOnlyFlexContainer>
              </TopSecondDiv>
            </Top>
            <Mid>
              <Image width={240} height={280} src={Clown} alt={'centerImg'}/>
            </Mid>
            <Bot>
              <HomeButton>
                <ButtonText>NOVO MARCADOR</ButtonText>
              </HomeButton>
              <HomeButton>
                <ButtonText>ENTRAR EM SALA EXISTENTE</ButtonText>
              </HomeButton>
            </Bot>
          </CenteredDiv>
        </HomeContainer>
      </div>
    );
  }
}

export default Home;
