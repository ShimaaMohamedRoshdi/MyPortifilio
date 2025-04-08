import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const FooterSection = styled.footer`
  // background: linear-gradient(180deg, rgba(30, 5, 51, 0.8) 0%, rgba(58, 15, 102, 0.9) 100%);
      background: linear-gradient(180deg, rgba(30, 5, 51, 0.8) 0%, rgba(58, 15, 102, 0.1) 100%);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(149, 70, 255, 0.2);
  padding: 1rem 0 2rem;
  position: relative;
  z-index: 10;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;




const Copyright = styled(motion.div)`
  text-align: center;
  color: #c4b5ff;

  p {
    margin: 0.5rem 0;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .heart {
    color: #ff46c7;
    animation: pulse 1.5s infinite;
  }

  .designer {
    background: linear-gradient(45deg, #9546ff, #ff46c7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterContainer>
   
        <Copyright
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          <p>
            {currentYear} All Rights Reserved
          </p>
          <p>
            Designed with <FaHeart className="heart" /> by{' '}
            <span className="designer">Shimaa Mohamed</span>
          </p>
        </Copyright>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
