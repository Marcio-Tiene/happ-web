import React from 'react';
import {
  ContentWrapper,
  H1,
  LinkEnterApp,
  LocationDiv,
  LocationSpan,
  LogoImgTag,
  Main,
  P,
  PageLandingDiv,
  Strong,
} from './styles';

import { FiArrowRight } from 'react-icons/fi';
import LogoImg from '../../assets/img/Logo.svg';

const LandingPage: React.FC = () => {
  return (
    <PageLandingDiv>
      <ContentWrapper>
        <LogoImgTag src={LogoImg} alt='happy' />
        <Main>
          <H1>Leve felicidade para o mundo</H1>
          <P>Visite orfanatos e mude o dia de muitas crianças.</P>
        </Main>

        <LocationDiv>
          <Strong>Florianópolis</Strong>
          <LocationSpan>Santa Catarina</LocationSpan>
        </LocationDiv>

        <LinkEnterApp to='/app'>
          <FiArrowRight size={26} color='rgba(0, 0, 0, 0.6)' />
        </LinkEnterApp>
      </ContentWrapper>
    </PageLandingDiv>
  );
};

export default LandingPage;
