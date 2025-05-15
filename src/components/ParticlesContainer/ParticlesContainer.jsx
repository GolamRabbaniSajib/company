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
            value: "#ffffff", // Changed to white background
          },
          opacity: 1,
        },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            color: { value: "#ffffff" },
            opacity: 1,
          },
          enable: false,
        },
        clear: true,
        defaultThemes: {},
        delay: 0,
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: { enable: false, force: 2, smooth: 10 },
            },
            resize: { enable: true, delay: 0.5 },
          },
          modes: {
            trail: { delay: 1, pauseOnStop: false, quantity: 1 },
            attract: {
              distance: 200,
              duration: 0.4,
              easing: "ease-out-quad",
              factor: 1,
              maxSpeed: 50,
              speed: 1,
            },
            bounce: { distance: 200 },
            bubble: {
              distance: 200,
              duration: 0.4,
              mix: false,
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
                radius: 60,
              },
            },
            grab: {
              distance: 100,
              links: {
                blink: false,
                consent: false,
                opacity: 1,
              },
            },
            push: {
              default: true,
              groups: [],
              quantity: 4,
            },
            remove: { quantity: 2 },
            repulse: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
            },
            slow: {
              factor: 3,
              radius: 200,
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
            limit: { mode: "delete", value: 0 },
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: false,
              speed: 2,
              startValue: "random",
              mode: "auto",
              destroy: "none",
            },
          },
          color: {
            value: "#ff0000", // red particles
            animation: {
              h: { enable: true, speed: 20, sync: true },
              s: { enable: false },
              l: { enable: false },
            },
          },
          move: {
            enable: true,
            speed: 4,
            direction: "none",
            straight: false,
            random: false,
            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            gravity: {
              enable: false,
              acceleration: 9.81,
              maxSpeed: 50,
              inverse: false,
            },
            angle: { value: 90, offset: 0 },
            path: { enable: false },
          },
          shape: {
            type: "circle",
            options: {},
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: false,
              speed: 5,
              startValue: "random",
              mode: "auto",
              destroy: "none",
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#0000ff",
            opacity: 0.4,
            width: 1,
            shadow: {
              enable: false,
              color: "#000",
              blur: 5,
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
