// import { useEffect, useState } from 'react'
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import './index.scss'
// import React from 'react'


// const Projects = () => {
//     const [letterClass, setLetterClass] = useState('text-animate')

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setLetterClass('text-animate-hover');
//     }, 3000);
  
//     return () => clearTimeout(timeoutId);
//   }, []);
//   return (
//     <>
//       <div className="container about-page">
//         <div className="text-zone">
//           <h1>
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
//               idx={15}
//             />
//           </h1>
//           <p>
//           wordswordswordswordswordswordswordswordswordswordswordswords
//           wordswordswordswordswordswordswordswordswordswordswordswords
//           wordswordswordswordswordswordswordswordswordswordswordswords
//           </p>
//         </div>
//         {/* right side of the page */}






//         </div>
//         <Loader type="pacman" />
//         </>
//   )
// }

// export default Projects






import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import BeachEvents from '../../assets/images/BeachEvents.png'
import ttt from '../../assets/images/tictactoe.png'
import discordbot from '../../assets/images/discord.png'
import iot from '../../assets/images/iot.jpg'

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project-details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const projectData = [
    {
      title: 'BeachEvents',
      description: 'A mobile app created for CSULB students to stay informed with club meetings, school events, sports, and everything happening at CSULB.',
      imageUrl: BeachEvents,
    },
    {
      title: 'AI TIC TAC TOE',
      description: 'A Tic-Tac-Toe game where the computer player uses the Alpha-Beta Pruning technique to make optimal moves. The Alpha-Beta Pruning is a modification of the minimax algorithm, which helps reduce the number of nodes evaluated in the search tree.',
      imageUrl: ttt,
    },
    {
      title: 'Discord Bot',
      description: 'Crafted a dynamic Discord bot template using Python and JavaScript. This template forms a strong base for creating engaging bots in Discord communities, excelling in message handling and user interactions.',
      imageUrl: discordbot,
    },
    {
      title: 'IoT',
      description: 'This project focuses on creating a server-client architecture for IoT data analysis. The server connects to a MongoDB database, downloads data, and performs analysis on the data. The client can query the server in real-time to retrieve the analyzed results.',
      imageUrl: iot,
    },
  ];

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>
        <p>
          
          Through out my <a href='https://github.com/j-jimenez01' style={{ color: 'white' }} alt='github'>Github</a>, you'll discover a collection of projects that highlight my technical prowess and 
          creative problem-solving. From 'BeachEvents,' a mobile app designed to keep CSULB students updated on campus activities, 
          to 'AI TIC TAC TOE,' where I harnessed Alpha-Beta Pruning for an unbeatable game opponent, and my 'Discord Bot' creation 
          that fosters engaging online communities.
        </p>
        <p>
        Additionally, I delved into the 'IoT' realm, architecting a server-client model
           for real-time data analysis. Each project reflects my commitment to innovation and my passion for crafting impactful 
           technological solutions.
        </p>
      </div>
      <div className="project-cards">
        <div className="row">
          {projectData.slice(0, 2).map((project, index) => (
            <div key={index} className="col">
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            </div>
          ))}
        </div>
        <div className="row">
          {projectData.slice(2, 4).map((project, index) => (
            <div key={index} className="col">
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Projects;
