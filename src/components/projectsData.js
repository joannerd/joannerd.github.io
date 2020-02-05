import adAstraScreenshot from '../media/adastra.png';
import brewerScreenshot from '../media/brewer.gif';
import boopblocksScreenshot from '../media/boopblocks.gif';
import restaurantMenuGif from '../media/menu.gif';
import bestJavascriptGif from '../media/bestjavascript.gif';

const projects = [
  {
    id: 1,
    title: 'Brewer',
    tech: 'React+Redux | Ruby on Rails',
    description: "Brewer is a single-page application inspired by Eater. Users can browse breweries, generate guides by city, and favorite generated guides. I implemented Mapbox GL JS and database calls to easily render each brewery's location on a city map.Brewer stores images on cloud with AWS S3 and Rails Active Storage to reduce server load and allow the app to scale.I developed an AJAX call to connect with my backend and parse a response that renders a guide and its respective breweries.",
    live: 'http://junnac-brewer.herokuapp.com/',
    github: 'https://github.com/junnac/Brewer',
    img: brewerScreenshot
  },
  {
    id: 2,
    title: 'adAstra',
    tech: 'MongoDB | Express.js | React | Node.js',
    description: "adAstra is a cosmic event planning app, built to create a stargazing community and help users geolocate the best sites for stargazing events. As the main frontend engineer of the team, I designed a dynamic web page and interactive hover effects with CSS3 to render an eye-catching website and forum with intuitive UX. I developed filter logic integrated with Mapbox GL JS geolocation to map the reflective location of constellations on Earth and display all currently viewable constellations.",
    live: 'http://ad--astra.herokuapp.com/',
    github: 'https://github.com/jenn-jenn/adAstra',
    img: adAstraScreenshot
  },
  {
    id: 3,
    title: 'Boop Blocks',
    tech: 'JavaScript | D3.js | Web Audio API',
    description: "BoopBlocks is an interactive browser instrument that teaches users about musical polyrhythms in a dynamic way. The application was inspired by a percussion for music therapists course where students workshopped meditative drum circles based on polyrhythms. I utilized D3.js to create dynamic SVG elements that allow intuitive user interaction with Web Audio API. Users can create sounds or investigate the characteristics of different polyrhythm blocks.",
    live: 'http://boopblocks.herokuapp.com/',
    github: 'https://github.com/junnac/boopblocks',
    img: boopblocksScreenshot
  },
  {
    id: 4,
    title: 'Best JavaScript',
    tech: 'React-Hooks | Redux | Ruby on Rails',
    description: "GitHub activity visualizer mini-project built to help users evaluate and vote for their favorite client-side JavaScript framework (React, Angular, Ember, Vue). I planned the application's use of technologies, design, and architecture from utilizing React-Hooks and Redux on the frontend to implementing CRUD features with a Ruby on Rails backend. I utilized Fetch API to query and parse a JSON response from the GitHub API and jQuery AJAX calls to connect to the PostgreSQL database.",
    live: 'http://best-javascript.herokuapp.com/',
    github: 'https://github.com/junnac/best-javascript',
    img: bestJavascriptGif
  },
  {
    id: 5,
    title: 'Restaurant Menu',
    tech: 'Javascript | React-Hooks | HTML5',
    description: "This React mini-project is divided into three components: a header rendering restaurant information, menu item index rendering a menu UI, and menu items rendering food item information. The header contains the restaurant name and an address linking to the Google map navigation for the restaurant. The menu item index will fetch all the food items of a category of the menu (ex: appetizer, dessert, drink).",
    live: '',
    github: 'https://github.com/junnac/restaurant-menu',
    img: restaurantMenuGif
  }
]

export default projects;