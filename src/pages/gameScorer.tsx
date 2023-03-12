import Image from 'next/image';
import React, { Component } from 'react';
import styled from 'styled-components';
import Clown from '../styles/assets/clown.svg'
import Spades from '../styles/assets/spades.png'
import Hearts from '../styles/assets/hearts.png'
import Clubs from '../styles/assets/clubs.png'
import Diamonds from '../styles/assets/diamonds.png'
import Link from 'next/link';

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
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    height: 100%;
    width: 100%;
  }
`;

const Mid = styled.div`
  flex: none;

  display: flex;
  height: 1rem;
  width: 100%;
`
const FlexScoreDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MidFirstDiv = styled.div`
  display: flex;
  flex: none;
  height: 100%;
  width: 100%;
  align-items: flex-end;
`

const SpadesCenteredFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

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

const ScoreNumber = styled.h2`
  font-size: 12rem;
  color: #D9B165;
  font-weight: normal;
`;

const TeamNameTextDiv = styled.div`
  flex: 1;
`
const QuantityOfTeamPointsDiv = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
`

const TeamNameInput = styled.input`
`

class GameScorer extends Component {
  render() {
    return (
      <div>
        <HomeContainer>
          <CenteredDiv>
            <FlexScoreDiv>
                <TeamNameTextDiv>
                    <TeamNameInput/>
                </TeamNameTextDiv>
                <QuantityOfTeamPointsDiv>
                    <ScoreNumber>12</ScoreNumber>
                </QuantityOfTeamPointsDiv>
            </FlexScoreDiv>
            <Mid>
              <MidFirstDiv>
                <SpadesCenteredFlexDiv>
                  <Image src={Spades} alt="spades" width={18} height={23} />
                </SpadesCenteredFlexDiv>
                <LineOnCenterDiv>
                  <Hr />
                </LineOnCenterDiv>
                <HeartsContainerFlexDiv>
                  <Image src={Hearts} alt="hearts" width={20} height={20}/>
                </HeartsContainerFlexDiv>
              </MidFirstDiv>
            </Mid>
            <FlexScoreDiv>
                <TeamNameTextDiv>
                    <TeamNameInput/>
                </TeamNameTextDiv>
                <QuantityOfTeamPointsDiv>
                    <ScoreNumber>12</ScoreNumber>
                </QuantityOfTeamPointsDiv>
            </FlexScoreDiv>
          </CenteredDiv>
        </HomeContainer>
      </div>
    );
  }
}

export default GameScorer;
