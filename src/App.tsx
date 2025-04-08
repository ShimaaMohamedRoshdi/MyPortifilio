// import React from 'react';
// import { Global, css } from '@emotion/react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './pages/Home';
// import AboutPage from './pages/About';
// import ProjectsPage from './pages/Projects';
// import ContactPage from './pages/Contact';
// import SkillsPage from './pages/Skills';

// const globalStyles = css`
//   * {
//     margin: 0;
  
//     padding: 0;
//     box-sizing: border-box;
//   }

//   body {
//     font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     background: #1e0533;
//     color: #ffffff;
//     overflow-x: hidden;
//     width: 100%;
//   }

//   #root {
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//   }

//   .app {
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//   }

//   main {
//     flex: 1;
//     padding-top: 80px;
//     width: 100%;
//     max-width: 1200px;
//     margin: 0 auto;
//     padding-left: 2rem;
//     padding-right: 2rem;
//   }

//   ::-webkit-scrollbar {
//     width: 10px;
//   }

//   ::-webkit-scrollbar-track {
//     background: rgba(255, 255, 255, 0.1);
//   }

//   ::-webkit-scrollbar-thumb {
//     background: rgba(149, 70, 255, 0.5);
//     border-radius: 5px;
//   }

//   ::-webkit-scrollbar-thumb:hover {
//     background: rgba(149, 70, 255, 0.8);
//   }
// `;

// const App: React.FC = () => {
//   return (
//     <>
//       <Global styles={globalStyles} />
//       <div className="app">
//         <Navbar />
//         <main>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/projects" element={<ProjectsPage />} />
//             <Route path="/skills" element={<SkillsPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default App;
import React from "react";
import { Global, css } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import SkillsPage from "./pages/Skills";


const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
    width: 100vw;
  }

  body {
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #1e0533;
    color: #ffffff;
    width: 100%;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    padding-top: 80px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(149, 70, 255, 0.5);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(149, 70, 255, 0.8);
  }
`;

const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <div className="app">
        <Navbar />
        
      
     
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
     

        <Footer />
      </div>
    </>
  );
};

export default App;
