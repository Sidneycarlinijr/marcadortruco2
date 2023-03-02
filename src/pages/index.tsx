import React, { Component } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set the height to the full viewport height */
  width: 100vw;
  background-color: #202124
`;

const CenteredDiv = styled.div`
  background: linear-gradient(#175A5F, #0E4150, #062B41, #042941);
  width: 30rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  flex: 1;
`
const Mid = styled.div`
  flex: 1;
`
const Bot = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 15px;
`
const HomeButton = styled.button`
  width: 18rem;
  height: 3rem;
  background-color: #D9B165;
  border: solid 3px #A27946;
  border-radius: 10px;
  cursor: pointer;
  boxShadow: 2px 2px 5px rgba(0, 0, 0, 0.3)
`

class Home extends Component {
  render() {
    return (
      <div>
        <HomeContainer>
          <CenteredDiv>
            <Top>a</Top>
            <Mid>b</Mid>
            <Bot>
              <HomeButton>
                <p style={{ color: '#523D14', fontSize: '18px' }}>NOVO MARCADOR</p>
              </HomeButton>
              <HomeButton>
                <p style={{ color: '#523D14', fontSize: '18px' }}>ENTRAR EM SALA EXISTENTE</p>
              </HomeButton>
            </Bot>
          </CenteredDiv>
        </HomeContainer>
      </div>
    );
  }
}

export default Home;