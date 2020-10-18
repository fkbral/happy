import styled from 'styled-components';
import landingImg from '../../assets/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;

  position: relative;
  background: url(${landingImg}) no-repeat 80% center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  main {
    max-width: 350px;
    margin-bottom: 48px;

    h1 {
      font-size: 78px;
      font-weight: 800;
      line-height: 72px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }

  a {
    width: 80px;
    height: 80px;
    border-radius: 30px;

    position: absolute;
    right: 0;
    bottom: 48px;
    background: #ffd666;
    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #96feff;
    }
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  strong {
    font-weight: 800;
  }
`;
