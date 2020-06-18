import adAstra from './media/adastra.png';
import brewer from './media/brewer.gif';
import boopblocks from './media/boopblocks.gif';
// import bestJavascript from './media/bestjavascript.gif';
// import fppg from './media/fppg.gif';
import synewaveshi from './media/synewaveshi.gif';

const projects = [
  {
    id: 1,
    title: 'Brewer',
    tech: 'React+Redux | Ruby on Rails',
    description: "Brewer is a single-page application inspired by Eater. Users can browse breweries, generate guides by city, and favorite generated guides. I implemented Mapbox GL JS and database calls to easily render each brewery's location on a city map.Brewer stores images on cloud with AWS S3 and Rails Active Storage to reduce server load and allow the app to scale.I developed an AJAX call to connect with my backend and parse a response that renders a guide and its respective breweries.",
    live: 'https://junnac-brewer.herokuapp.com/',
    github: 'https://github.com/junnac/Brewer',
    img: brewer
  },
  {
    id: 2,
    title: 'adAstra',
    tech: 'Express.js | React | Node.js',
    description: "adAstra is a cosmic event planning app, built to create a stargazing community and help users geolocate the best sites for stargazing events. As the main frontend engineer of the team, I designed a dynamic web page and interactive hover effects with CSS3 to render an eye-catching website and forum with intuitive UX. I developed filter logic integrated with Mapbox GL JS geolocation to map the reflective location of constellations on Earth and display all currently viewable constellations.",
    live: 'https://ad--astra.herokuapp.com/',
    github: 'https://github.com/jenn-jenn/adAstra',
    img: adAstra
  },
  {
    id: 3,
    title: 'Synewaveshi',
    tech: 'Speech API | Socket.io | Tone.js',
    description: "Communication app that simulates synesthesia and inquisitively explores voice-controlled computer music generation. Synewaveshi uses the experimental Web Speech API to manage voice input. Socket.io is used to pass tones and colors to another user of the app, while Tone.js is used to create the notes.",
    live: 'https://synewaveshi.herokuapp.com/',
    github: 'https://github.com/junnac/synewaveshi',
    img: synewaveshi
  },
  {
    id: 4,
    title: 'Boop Blocks',
    tech: 'JavaScript | Web Audio API',
    description: "BoopBlocks is an interactive browser instrument that teaches users about musical polyrhythms in a dynamic way. The application was inspired by a percussion for music therapists course where students workshopped meditative drum circles based on polyrhythms. I utilized D3.js to create dynamic SVG elements that allow intuitive user interaction with Web Audio API. Users can create sounds or investigate the characteristics of different polyrhythm blocks.",
    live: 'https://boopblocks.herokuapp.com/',
    github: 'https://github.com/junnac/boopblocks',
    img: boopblocks
  },
  // {
  //   id: 5,
  //   title: 'Best JavaScript',
  //   tech: 'React | Redux | Ruby on Rails',
  //   description: "GitHub activity visualizer mini-project built to help users evaluate and vote for their favorite client-side JavaScript framework (React, Angular, Ember, Vue). I planned the application's use of technologies, design, and architecture from utilizing React-Hooks and Redux on the frontend to implementing CRUD features with a Ruby on Rails backend. I utilized Fetch API to query and parse a JSON response from the GitHub API and jQuery AJAX calls to connect to the PostgreSQL database.",
  //   live: 'https://best-javascript.herokuapp.com/',
  //   github: 'https://github.com/junnac/best-javascript',
  //   img: bestJavascript
  // },
  // {
  //   id: 6,
  //   title: 'Highest Points',
  //   tech: 'Javascript | React',
  //   description: "This mini-game built with JavaScript with React-Hooks is divided into GameDashboard, renders the game interface, and GameAPI, contains the helper methods for the game logic. The GameDashboard renders player cards and the UI while the GameAPI includes the game. Users click cards to make a guess for the player with the highest points. Upon click, the GameDashboard handles checking the winning card and updating the scoreboard while the GameAPI assists by resetting the cards and revealing the winning card.",
  //   live: 'https://fppg.herokuapp.com/',
  //   github: 'https://github.com/junnac/fppg',
  //   img: fppg
  // }
]

export default projects;
