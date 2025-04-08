
// import styled from '@emotion/styled';
// import { motion } from 'framer-motion';
// import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaBootstrap,FaDatabase } from 'react-icons/fa';
// import { SiTypescript, SiJavascript, SiRedux, SiNextdotjs, SiTailwindcss,SiGithub ,SiFramer,SiVercel} from 'react-icons/si';

// import { BsFiletypeJsx } from 'react-icons/bs';

// const SkillsSection = styled(motion.section)`
//   min-height: 100vh;
//   padding: 100px 0;
//   background: linear-gradient(335deg, #1e0533 0%, #3a0f66 100%);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
// `;

// const Container = styled.div`
//   max-width: 1400px;
//   width: 100%;
//   position: relative;
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

// const SliderContainer = styled.div`
//   display: flex;
//   overflow: hidden;
//   position: relative;
//   white-space: nowrap;
// `;

// const SliderTrack = styled(motion.div)`
//   display: flex;
//   gap: 2rem;
// `;

// const SkillCard = styled(motion.div)`
//   background: rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(10px);
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   border-radius: 20px;
//   padding: 2rem;
//   text-align: center;
//   min-width: 200px;
//   height: 150px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const SkillIcon = styled.div`
//   font-size: 2.5rem;
//   color: #e2b8ff;
// `;

// const SkillName = styled.h3`
//   font-size: 1.2rem;
//   color: #ffffff;
//   margin-top: 0.5rem;
// `;

// const Skills = () => {
//   const skills = [
//     { name: 'HTML5', icon: <FaHtml5 /> },
//     { name: 'CSS3', icon: <FaCss3Alt /> },
//     { name: 'JavaScript', icon: <SiJavascript /> },
//     { name: 'TypeScript', icon: <SiTypescript /> },
//     { name: 'React.js', icon: <FaReact /> },
//     { name: 'Redux', icon: <SiRedux /> },
//     { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
//     { name: 'Bootstrap', icon: <FaBootstrap /> },
//     { name: 'Next.js', icon: <SiNextdotjs /> },
//     { name: 'React Router DOM', icon: <BsFiletypeJsx /> },
//     { name: 'RESTful API', icon: <FaDatabase /> }, // using database icon as generic API symbol
//     { name: 'Git', icon: <FaGitAlt /> },
//     { name: 'GitHub', icon: <SiGithub /> },
//     { name: 'Framer Motion', icon: <SiFramer /> }, 
//     { name: 'Vercel', icon: <SiVercel /> }


//   ];
  
//   return (
//     <SkillsSection 
//       id="skills"
//       initial={{ opacity: 0, y: 50 }} 
//       animate={{ opacity: 1, y: 0 }} 
//       transition={{ duration: 1 }}
//     >
//       <Container>
//         <Title
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           Technical Skills
//         </Title>

//         <SliderContainer>
//           <SliderTrack
//             animate={{
//               x: ['0%', '-100%'],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 20,
//               ease: 'linear',
//             }}
//           >
//             {[...skills, ...skills].map((skill, index) => (
//               <SkillCard
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <SkillIcon>{skill.icon}</SkillIcon>
//                 <SkillName>{skill.name}</SkillName>
//               </SkillCard>
//             ))}
//           </SliderTrack>
//         </SliderContainer>
//       </Container>
//     </SkillsSection>
//   );
// };

// export default Skills;
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
  FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaBootstrap, FaDatabase,
  FaLightbulb, FaComments, FaUsers, FaSyncAlt, FaClock, FaEye
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiRedux, SiNextdotjs,
  SiTailwindcss, SiGithub, SiFramer, SiVercel
} from 'react-icons/si';
import { BsFiletypeJsx } from 'react-icons/bs';

const SkillsSection = styled(motion.section)`
  min-height: 100vh;
  padding: 100px 0;
  background: linear-gradient(335deg, #1e0533 0%, #3a0f66 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  position: relative;
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

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  margin-bottom: 60px;
`;

const SliderTrack = styled(motion.div)`
  display: flex;
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  min-width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: #e2b8ff;
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: #ffffff;
  margin-top: 0.5rem;
`;

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'React Router DOM', icon: <BsFiletypeJsx /> },
    { name: 'RESTful API', icon: <FaDatabase /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'Framer Motion', icon: <SiFramer /> },
    { name: 'Vercel', icon: <SiVercel /> }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <FaLightbulb /> },
    { name: 'Communication', icon: <FaComments /> },
    { name: 'Teamwork', icon: <FaUsers /> },
    { name: 'Adaptability', icon: <FaSyncAlt /> },
    { name: 'Time Management', icon: <FaClock /> },
    { name: 'Attention to Detail', icon: <FaEye /> }
  ];

  return (
    <SkillsSection
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        {/* Technical Skills */}
        <Title
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Technical Skills
        </Title>

        <SliderContainer>
          <SliderTrack
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear',
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <SkillCard
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SliderTrack>
        </SliderContainer>

        {/* Soft Skills */}
        <Title
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Soft Skills
        </Title>

        <SliderContainer>
          <SliderTrack
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: 'linear',
            }}
          >
            {[...softSkills, ...softSkills].map((skill, index) => (
              <SkillCard
                key={`soft-${index}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SliderTrack>
        </SliderContainer>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
