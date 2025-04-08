import { useCallback } from 'react';
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import styled from '@emotion/styled';

const ParticleContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticleContainer>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 6,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#9546ff", "#ff46c7", "#ffffff"],
            },
            links: {
              color: "#9546ff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 2,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 150,
            },
            opacity: {
              value: { min: 0.3, max: 0.8 },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
                sync: false
              }
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 1,
                sync: false
              }
            },
          },
          detectRetina: true,
        }}
      />
    </ParticleContainer>
  );
};

export default ParticleBackground;
