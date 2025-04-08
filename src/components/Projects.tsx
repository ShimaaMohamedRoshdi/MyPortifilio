import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import img1 from "../assets/images/image.png";
import img2 from "../assets/images/spotifyimg.png";
import img3 from "../assets/images/dashboardimage.png";
import img4 from "../assets/images/movieappimage.png";
import img5 from "../assets/images/eshop-image.png";
import img6 from "../assets/images/grocryimage.png";
import img7 from "../assets/images/Multimartimage.png";
import img8 from "../assets/images/Wwatherappimage.png";
import img9 from "../assets/images/solarimage.png";
import img10 from "../assets/images/interiordesignimage.png";
import img11 from "../assets/images/bondii.png";
import img12 from "../assets/images/portifilioimage.png";


const ProjectSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: linear-gradient(335deg, #1e0533 0%, #3a0f66 100%);
  width: 100%;
  position: relative;
  overflow: hidden;
  perspective: 1000px;

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

const ProjectContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  transform-style: preserve-3d;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  transform-style: preserve-3d;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(149, 70, 255, 0.3);
    box-shadow: 0 10px 30px rgba(149, 70, 255, 0.2);
  }
  
  .image-container {
    position: relative;
    overflow: hidden;
    height: 250px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(149, 70, 255, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      opacity: 0;
      transition: all 0.3s ease;
    }

    &:hover {
      .overlay {
        opacity: 1;
      }
      img {
        transform: scale(1.1);
      }
    }
  }
`;

const IconLink = styled.a`
  color: white;
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.3);
    color: white;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
  transition: transform 0.3s ease;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #c4b5ff;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  transition: transform 0.3s ease;
`;

const TechTag = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  background: rgba(149, 70, 255, 0.1);
  border: 1px solid rgba(149, 70, 255, 0.2);
  color: #e2b8ff;
  font-size: 0.875rem;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(149, 70, 255, 0.2);
    border-color: rgba(149, 70, 255, 0.3);
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
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

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "This project is an eCommerce website built using React JS and Tailwind CSS. The aim is to create a seamless shopping experience for users, featuring a modern design and responsive layout.",
      image: img1,
      github: "https://github.com/ShimaaMohamedRoshdi/Spotify-Clone",
      demo: "https://ecommerce-react-dl6b.vercel.app/",
      tech: ["React", "Tailwind CSS", "Css3", "Html5","Javascript"]
    },
    {
      id: 12,
      title: "Portfolio Website",
      description: "This project is a portfolio website built using React JS and React-bootstrap. The aim is to create a modern and responsive design for a personal portfolio, featuring a clean and professional layout.",
      image: img12,
      github: "https://github.com/ShimaaMohamedRoshdi/MyPortifilio",
      demo: "https://my-portifilio123.vercel.app/",
      tech: ["React","TypeScript","React-Bootstrap","Framer Motion",  "Css3", "Html5","Javascript"]
    },
    {
      id: 2,
      title: "Spotify Clone",
      description: "Spotify Clone Where we can play audio songs online. On this music website we will add some music albums and multiple songs. We can play song online, and we will also create the song controller button. we will use React js and Tailwind CSS🎵🎧🎶⭐",
      image: img2,
      github: "https://github.com/ShimaaMohamedRoshdi/Spotify-Clone",
      demo: "https://spotify-clone-shimaa.vercel.app/",
      tech: ["React","Tailwind CSS","React Router ","Hooks","JavaScript (ES6+)","HTML5 Audio API ","Css3"]
    },
    {
      id: 3,
      title: "Admin Dashboard App",
      description: "Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban , Editor , Color-Picker , and also display all orders , all employees  and all Customers . And More..",
      image: img3,
      github: "https://github.com/ShimaaMohamedRoshdi/Dashboard",
      demo: "https://dashboard-j1hh.vercel.app/",
      tech: ["React","Tailwind CSS","Syncfusion Library","Context Provider", "Css3","Html5","Javascript"]
    },
    {
      id: 4,
      title: "Movie App",
      description: "🚀 Responsive Movie Website with React.js 🎬 In this project, I built a fully dynamic and responsive movie website using React.js. This website fetches movie data from an API, displays trending films, and includes interactive UI elements like a carousel slider, filters, and an animated header.",
      image: img4,
      github: "https://github.com/ShimaaMohamedRoshdi/Movie-APP",
      demo: "https://movie-app-a8e3.vercel.app",
      tech: ["React","Tailwind CSS","Axios","React Router","Context Provider", "Css3","Html5","Javascript"]
    },
    {
      id: 5,
      title: "E-Shop",
      description: "🛒 Modern eCommerce Website with React & Redux Toolkit This project is a fully functional eCommerce website built with React.js, Redux Toolkit, and Tailwind CSS. It provides a seamless shopping experience with features like a cart system, product search, filtering, order tracking, and checkout process.🛍️🧥",
      image: img5,
      github: "https://github.com/ShimaaMohamedRoshdi/E-Shop",
      demo: "https://e-shop-rho-sandy.vercel.app/",
      tech: ["React","Redux Toolkit","Tailwind CSS","Axios","React Router","Context Provider", "Css3","Html5","Javascript"]
    },
    {
      id: 6,
      title: "Grocery",
      description: "This is a fully responsive website featuring a modern and sleek design. The website includes multiple sections such as a sticky double header, banner, product, category, and contact sections, all built with Flexbox and JavaScript. The deal section also includes a countdown effect using JavaScript.💫🥗🍉🍎",
      image: img6,
      github: "https://github.com/ShimaaMohamedRoshdi/ECommerce---Grocry",
      demo: "https://shimaamohamedroshdi.github.io/ECommerce---Grocry/register.html",
      tech: [ "Css3","Html5","Javascript","Flexbox"]
    },
    {
      id: 7,
      title: "MultiMart",
      description: "Maltimart is a sleek, high-performance shopping platform designed to make online shopping faster, smarter, and more enjoyable. Built with modern technologies, it delivers a smooth, intuitive, and fully responsive user experience that works seamlessly across all devices. Whether you're browsing products, managing your cart, or checking out.",
      image: img7,
      github: "https://github.com/ShimaaMohamedRoshdi/Multimart",
      demo: "https://multimart-theta.vercel.app/",
      tech: [ "reactjs","react-router-dom","react-bootstrap","state management using Redux Toolkit"]
    },
    {
      id: 8,
      title: "Weather App",
      description: " Weather App is a responsive and user-friendly application that provides real-time weather information for any location. Built with React.js and  react-bootstrap, it offers a smooth and intuitive user experience with a modern design. The app includes features like temperature conversion, wind speed, and detailed weather forecasts, making it a reliable resource for weather enthusiasts.",
      image: img8,
      github: "https://github.com/ShimaaMohamedRoshdi/WeatherApp",
      demo: "https://weather-app-one-rho-63.vercel.app/",
      tech: ["reactjs","react-bootstrap","Css3","Html5","Javascript","OpenWeatherMap API ","RESTful APIs","env for API keys"]
    },
    {
      id: 10,
      title: "Interior Design",
      image: img10,
      description: "A responsive interior design web app created with HTML5, CSS3, and Bootstrap. This application allows users to explore different design templates, visualize room layouts, and customize furniture placement. The app’s clean, modern interface is optimized for all devices, offering an intuitive experience for users to plan and design their spaces. ",
      github: "https://github.com/ShimaaMohamedRoshdi/Interior_Design",
      demo: "https://shimaamohamedroshdi.github.io/Interior_Design/",
      tech: ["Css3","Html5","Javascript","webfonts"]
    },
    
    {
      id: 9,
      title: "Solar Company",
      image: img9,
      description: " Solar Company is a responsive and user-friendly application ",
      github: "https://github.com/ShimaaMohamedRoshdi/Solar_Company",
      demo: "https://shimaamohamedroshdi.github.io/Solar_Company/",
      tech: ["Css3","Html5","Javascript","webfonts"]
    },
    {
      id: 10,
      title: "Bondi Website",
      image: img11,
      description: "A responsive and elegant website created using HTML5, CSS3, and Bootstrap. The site features a modern design with a clean layout, ensuring an optimized user experience across all devices. It showcases responsive navigation, interactive elements, and a polished, user-friendly interface.",
      github: "https://github.com/ShimaaMohamedRoshdi/websitte_banddi",
      demo: "https://shimaamohamedroshdi.github.io/websitte_banddi/",
      tech: ["Css3","Html5","Javascript","webfonts"]
    },
  
  ];

  return (
    <ProjectSection id="projects">
      <ProjectContainer>
        <Title
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </Title>
        <Description
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects that showcase my skills and experience in web development.
          Each project reflects my passion for creating beautiful and functional applications.
        </Description>

        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="image-container">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <IconLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </IconLink>
                  <IconLink href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </IconLink>
                </div>
              </div>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <div>
                  {project.tech.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </div>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectContainer>
    </ProjectSection>
  );
};

export default Projects;
