import React, { useState } from 'react';
import { DARK_IMAGES, LIGHT_CHOICE, LIGHT_IMAGES, LIGHT_TITLE, DARK_TITLE } from './util';
import './App.scss';
import LandingChoice from './LandingChoice';
import ImageGrid from './ImageGrid';
import Particles from 'react-tsparticles';

function App() {
  const [sideChosen, setSide] = useState(null as unknown as string);

  const getSideComp = (side: string) => {
    if (side === LIGHT_CHOICE) {
      return <ImageGrid hoverClass="light-hover" images={LIGHT_IMAGES} title={LIGHT_TITLE} />;
    } else {
      return <ImageGrid hoverClass="dark-hover" images={DARK_IMAGES} title={DARK_TITLE} />;
    }
  }

  return (
    <div className="App container">
      {sideChosen === null ? <LandingChoice setSide={setSide} /> : getSideComp(sideChosen)}
      <Particles className="space-particles" options={{
        background: {
          color: "#000"
        },
        detectRetina: false,
        fpsLimit: 30,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true
          }
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            opacity: 0,
            size: 0
          },
          grab: {
            distance: 400
          },
          repulse: {
            distance: 400
          }
        },
        particles: {
          life: {
            duration: {
              sync: false,
              value: 30
            },
            count: 0,
            delay: {
              random: {
                enable: true,
                minimumValue: 0.5
              },
              value: 1
            }
          },
          color: {
            value: "#fff"
          },
          number: {
            density: {
              enable: true,
              area: 200
            },
            limit: 0,
            value: 600
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 0.25,
              sync: false
            },
            random: {
              enable: true,
              minimumValue: 0.05
            },
            value: 1
          },
          shape: {
            type: "circle"
          },
          size: {
            random: {
              enable: true,
              minimumValue: 0.5
            },
            value: 1.2
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 600
              }
            },
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out"
            },
            random: true,
            speed: 1
          }
        }
      }} />
    </div>
  );
}

export default App;
