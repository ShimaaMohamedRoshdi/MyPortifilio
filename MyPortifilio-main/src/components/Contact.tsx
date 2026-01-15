// import styled from '@emotion/styled';
// import { motion } from 'framer-motion';
// import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// const ContactSection = styled.section`
//   min-height: 100vh;
//   padding: 100px 0;
//   background: linear-gradient(135deg, #1e0533 0%, #3a0f66 100%);
//   position: relative;
//   overflow: hidden;
//   perspective: 1000px;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: 
//       radial-gradient(circle at 20% 30%, rgba(149, 70, 255, 0.15) 0%, transparent 40%),
//       radial-gradient(circle at 80% 70%, rgba(255, 70, 199, 0.15) 0%, transparent 40%);
//     z-index: 1;
//   }
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 2rem;
//   position: relative;
//   z-index: 2;
//   transform-style: preserve-3d;
// `;

// const Title = styled(motion.h2)`
//   font-size: clamp(2rem, 5vw, 3.5rem);
//   font-weight: 800;
//   text-align: center;
//   margin-bottom: 2rem;
//   background: linear-gradient(45deg, #ffffff 0%, #e2b8ff 50%, #ffffff 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   text-shadow: 0 0 40px rgba(149, 70, 255, 0.4);
// `;

// const Description = styled(motion.p)`
//   font-size: 1.2rem;
//   color: #c4b5ff;
//   text-align: center;
//   max-width: 800px;
//   margin: 0 auto 4rem;
//   line-height: 1.8;
// `;

// const ContactForm = styled(motion.form)`
//   background: rgba(255, 255, 255, 0.05);
//   backdrop-filter: blur(10px);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 20px;
//   padding: 3rem;
//   max-width: 600px;
//   margin: 0 auto;
//   transition: all 0.3s ease;

//   &:hover {
//     border-color: rgba(149, 70, 255, 0.3);
//     box-shadow: 0 10px 30px rgba(149, 70, 255, 0.2);
//   }
// `;

// const FormGroup = styled.div`
//   position: relative;
//   margin-bottom: 2rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 1rem;
//   background: rgba(255, 255, 255, 0.05);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 10px;
//   color: white;
//   transition: all 0.3s ease;

//   &:focus {
//     outline: none;
//     border-color: #9546ff;
//     background: rgba(255, 255, 255, 0.08);
//   }
// `;

// const Label = styled.label`
//   position: absolute;
//   left: 1rem;
//   color: #c4b5ff;
//   transform: translateY(-50%);
//   top: 50%;
//   transition: all 0.3s ease;
//   transform-origin: left;
//   pointer-events: none;
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 1rem;
//   background: rgba(255, 255, 255, 0.05);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 10px;
//   color: white;
//   min-height: 150px;
//   transition: all 0.3s ease;

//   &:focus {
//     outline: none;
//     border-color: #9546ff;
//     background: rgba(255, 255, 255, 0.08);
//   }
// `;

// const SubmitButton = styled(motion.button)`
//   background: linear-gradient(45deg, #9546ff, #ff46c7);
//   color: white;
//   border: none;
//   padding: 1rem 3rem;
//   font-size: 1.1rem;
//   font-weight: 600;
//   border-radius: 50px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   margin-top: 2rem;
//   width: 100%;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(
//       90deg,
//       transparent,
//       rgba(255, 255, 255, 0.2),
//       transparent
//     );
//     transition: 0.5s;
//   }

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 8px 25px rgba(149, 70, 255, 0.5);
//     &::before {
//       left: 100%;
//     }
//   }
// `;

// const SocialLinks = styled(motion.div)`
//   display: flex;
//   justify-content: center;
//   gap: 2rem;
//   margin-top: 4rem;
// `;

// const SocialLink = styled.a`
//   color: #c4b5ff;
//   font-size: 1.8rem;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   background: rgba(255, 255, 255, 0.05);
//   border: 1px solid rgba(255, 255, 255, 0.1);

//   &:hover {
//     color: white;
//     transform: translateY(-5px);
//     background: rgba(149, 70, 255, 0.2);
//     border-color: rgba(149, 70, 255, 0.3);
//     box-shadow: 0 5px 15px rgba(149, 70, 255, 0.3);
//   }
// `;

// const Contact = () => {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Add form submission logic here
//   };

//   return (
//     <ContactSection id="contact">
//       <Container>
//         <Title
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           Get In Touch
//         </Title>
//         <Description
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           Have a question or want to work together? Feel free to reach out!
//         </Description>

//         <ContactForm
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//           onSubmit={handleSubmit}
//         >
//           <FormGroup>
//             <Input type="text" id="name" required />
//             <Label htmlFor="name">Name</Label>
//           </FormGroup>
//           <FormGroup>
//             <Input type="email" id="email" required />
//             <Label htmlFor="email">Email</Label>
//           </FormGroup>
//           <FormGroup>
//             <TextArea id="message" rows={5} required />
//             <Label htmlFor="message">Message</Label>
//           </FormGroup>
//           <SubmitButton type="submit">Send Message</SubmitButton>
//         </ContactForm>

//         <SocialLinks>
//           <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
//             <FaGithub />
//           </SocialLink>
//           <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin />
//           </SocialLink>
//           <SocialLink href="#" target="_blank" rel="noopener noreferrer">
//             <FaTwitter />
//           </SocialLink>
//           <SocialLink href="mailto:your.email@example.com">
//             <FaEnvelope />
//           </SocialLink>
//         </SocialLinks>
//       </Container>
//     </ContactSection>
//   );
// };

// export default Contact;
import { useState, useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: linear-gradient(135deg, #1e0533 0%, #3a0f66 100%);
  position: relative;
  overflow: hidden;
  perspective: 1000px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  transform-style: preserve-3d;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #ffffff 0%, #e2b8ff 50%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 40px rgba(149, 70, 255, 0.4);
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #c4b5ff;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.8;
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #9546ff;
    background: rgba(255, 255, 255, 0.08);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  min-height: 150px;
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, #9546ff, #ff46c7);
  color: white;
  border: none;
  padding: 1rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(149, 70, 255, 0.5);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
`;

const SocialLink = styled.a`
  color: #c4b5ff;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    color: white;
    transform: translateY(-5px);
  }
`;

// Particles Background
const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }
    alert("Message Sent!");
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ContactSection id="contact">
      {/* Particles Background */}
      <ParticlesContainer>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            particles: {
              number: { value: 300, density: { enable: true, area: 500 } },
              color: { value: ["#9546ff", "#ff46c7", "#ffffff"] },
              move: { enable: true, speed: 2, direction: "none", random: true },
              shape: { type: "circle" },
              size: { value: { min: 2, max: 6 }, animation: { enable: true, speed: 2 } },
            },
          }}
        />
      </ParticlesContainer>

      <Container>
        <Title>Get In Touch</Title>
        <Description>Have a question or want to collaborate? Reach out below!</Description>

        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <TextArea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </FormGroup>
          <SubmitButton type="submit">Let's Collaborate!</SubmitButton>
        </ContactForm>

        <SocialLinks>
          <SocialLink href="https://github.com/ShimaaMohamedRoshdi"><FaGithub /></SocialLink>
          <SocialLink href="https://www.linkedin.com/in/shimaa-mohamed-502aab27b"><FaLinkedin /></SocialLink>
          <SocialLink href="mailto:shimaamohamedd462@gmail.com"><FaEnvelope /></SocialLink>
          <SocialLink href="tel:+201066585154"><FaPhone /></SocialLink>
        </SocialLinks>
      </Container>
    </ContactSection>
  );
};

export default Contact;
