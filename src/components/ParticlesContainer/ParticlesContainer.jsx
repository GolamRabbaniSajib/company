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
        key: "basic",
        name: "Basic",
        autoPlay: true,
        background: {
          color: {
            value: "#ffffff",
          },
          opacity: 1,
        },
        clear: true,
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        detectRetina: true,
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: { enable: true },
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
            value: 0.2, // 🔽 reduced particle opacity
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
          links: {
            enable: true,
            distance: 150,
            color: "#0000ff",
            opacity: 0.2, // 🔽 reduced link opacity
            width: 1,
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
