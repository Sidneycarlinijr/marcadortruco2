import Image from 'next/image';
import React, { Component } from 'react';
import styled from 'styled-components';
import Clown from '../styles/assets/clown.svg'
import Spades from '../styles/assets/spades.png'
import Heart from '../styles/assets/heart.png'

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
  height: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const TopFirstDiv = styled.div`
  display: flex;
  flex: none;
  height: 50px;
  width: 100%;
  align-items: flex-end;
`

class Home extends Component {
  render() {
    return (
      <div>
        <HomeContainer>
          <CenteredDiv>
            <Top>
              <TopFirstDiv>
                <div style={{ display: 'flex', justifyContent: 'center', flex: 1,  }}>
                  <Image src={Spades} alt="spades" width={18} height={23}/>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', flex: 'none', width: '45%', height: '100%', marginBottom: '0.5rem' }}>
                  <hr style={{border: '0.5px solid #D9B165', width: '100%'}}>
                  </hr>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
                  <Image src={Heart} alt="heart" width={20} height={20}/>
                </div>
              </TopFirstDiv>
              <div style={{ flex: '1', display: 'flex', marginTop: '2.5rem' }}>
                <div style={{ flex: '1', display: 'flex', alignItems:'center', justifyContent: 'center', paddingLeft: '2rem' }}>
                  <div style={{ width: '100%', height: '100%', borderTop: '1px solid #D9B165', borderLeft: '1px solid #D9B165' }}></div>
                </div>
                <div style={{ flex: 'none', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', width: '5rem' }}>
                  <div>a</div>
                  <div>b</div>
                  <div>c</div>
                </div>
                <div style={{ flex: '1', display: 'flex', alignItems:'center', justifyContent: 'center', paddingRight: '2rem' }}>
                  <div style={{ width: '100%', height: '100%', borderTop: '1px solid #D9B165', borderRight: '1px solid #D9B165' }}></div>
                </div>
              </div>
            </Top>
            <Mid>
              <Image width={215} height={250} src={Clown} alt={'centerImg'}/>
            </Mid>
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