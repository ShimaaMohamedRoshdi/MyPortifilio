// trigger redeploy

import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

const HeroSection = styled.section`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1e0533 0%, #3a0f66 50%, #1e0533 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(149, 70, 255, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(255, 70, 199, 0.15) 0%, transparent 40%);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 80vw;
    height: 80vw;
    background: linear-gradient(45deg, rgba(149, 70, 255, 0.1), rgba(255, 70, 199, 0.05));
    border-radius: 50%;
    top: -40vw;
    right: -40vw;
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 3rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #9546ff, #ff46c7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
  }
`;

const PrimaryLink = styled(StyledLink)`
  background: linear-gradient(45deg, #9546ff, #ff46c7);
  color: white;
  box-shadow: 0 4px 15px rgba(149, 70, 255, 0.4);
`;

const SecondaryLink = styled(StyledLink)`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <ParticleBackground />
      <HeroContent>
      <Title
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Hi, I'm Shimaa, a Front-End Developer
</Title>
<Subtitle
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  I specialize in building modern, responsive web applications using **React.js**, **TypeScript**,**Next.js** ,**Tailwind CSS** and **Bootstrap **. I am passionate about creating intuitive and seamless user experiences with a focus on clean code, problem-solving, and collaboration.
</Subtitle>
        {/* <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm a Developer
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I have experience building and designing software. Currently, I love
          to work on web applications using technologies like React,
          Bootstrap, and TypeScript.
        </Subtitle> */}
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <PrimaryLink to="/projects">
            View Work
          </PrimaryLink>
          <SecondaryLink to="/contact">
            Contact Me
          </SecondaryLink>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
