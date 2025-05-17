"use client";

import { useCallback } from "react";
import { Particles } from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        background: {
          color: {
            value: "#ffffff",
          },
          opacity: 1,
        },
        fpsLimit: 120,
        detectRetina: true,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: {
              distance: 200,
              duration: 0.4,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              factor: 100,
            },
          },
        },
        particles: {
          number: {
            value: 130,
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
          },
          opacity: {
            value: 0.1,
            animation: {
              enable: false,
            },
          },
          color: {
            value: "#ff0000",
            animation: {
              h: { enable: true, speed: 20, sync: true },
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#0000ff",
            opacity: 0.1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 4,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: false,
            },
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        zLayers: 100,
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true,
          },
        },
      }}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default ParticlesContainer;
