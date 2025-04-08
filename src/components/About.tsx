
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: linear-gradient(135deg, #1e0533 0%, #3a0f66 100%);
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
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(149, 70, 255, 0.3);
    box-shadow: 0 10px 30px rgba(149, 70, 255, 0.2);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, #9546ff, #ff46c7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 10px rgba(149, 70, 255, 0.3));
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const SkillDescription = styled.p`
  color: #c4b5ff;
  line-height: 1.6;
  margin: 0;
`;

const ExperienceTimeline = styled.div`
  margin-top: 5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: translateZ(0) rotateX(5deg) scale(0.98);
  transition: all 0.5s ease;

  &:hover {
    transform: translateZ(30px) rotateX(0deg) scale(1);
    border-color: rgba(149, 70, 255, 0.3);
    box-shadow: 
      0 20px 40px rgba(149, 70, 255, 0.2),
      0 0 20px rgba(149, 70, 255, 0.1);
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }

  &:last-child {
    border-bottom: none;
  }

  .year {
    font-size: 1.2rem;
    color: #9546ff;
    font-weight: 600;
    min-width: 100px;
  }

  .content {
    h4 {
      color: #ffffff;
      margin-bottom: 0.5rem;
    }

    p {
      color: #c4b5ff;
      margin: 0;
    }
  }
`;

const About = () => {
  const skills = [
    {
      icon: <FaCode className="icon" />,
      title: "Frontend Development",
      description: "React.js, TypeScript, Redux, Tailwind CSS, and Bootstrap for responsive, component-based UIs."
    },
    {
      icon: <FaServer className="icon" />,
      title: "API Integration",
      description: "RESTful API integration, working with backend endpoints, and managing dynamic data in React apps."
    },
    {
      icon: <FaTools className="icon" />,
      title: "Version Control & Deployment",
      description: "Git, GitHub for collaboration, and Vercel for seamless deployment and hosting of modern web apps."
    }
  ];

  const experiences = [
    {
      year: "2024",
      title: "Frontend Developer - Freelance",
      description: "Built dynamic React apps with Redux, Tailwind, and Bootstrap. Integrated RESTful APIs and managed responsive designs."
    },
    {
      year: "2023",
      title: "Intern - Web Development",
      description: "Gained practical experience in frontend development, focusing on component-based architecture using React and Git version control."
    },
    {
      year: "2022",
      title: "Self-Learning & Projects",
      description: "Completed multiple projects using React, GitHub, and Next.js. Learned best practices in JavaScript, TypeScript, and modern CSS."
    }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <Title
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </Title>

        <Description
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm a Frontend Developer with hands-on experience in building modern web applications using React, TypeScript, Redux, and Tailwind CSS. I have strong knowledge in building reusable components, integrating RESTful APIs, and creating responsive UIs that offer great user experiences. I'm passionate about clean code, performance, and collaboration in agile environments.
        </Description>

        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>

        <ExperienceTimeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="year">{exp.year}</div>
              <div className="content">
                <h4>{exp.title}</h4>
                <p>{exp.description}</p>
              </div>
            </TimelineItem>
          ))}
        </ExperienceTimeline>
      </Container>
    </AboutSection>
  );
};

export default About;
