import readyevent from '../assets/webApps/readyevent.png';
import SudokusAndDragons from '../assets/webApps/SudokusAndDragons.png';
import QuizApp from '../assets/webApps/QuizApp.png';
import MTGCardSearch from '../assets/webApps/MTGCardSearch.png';
import RickAndMorty from '../assets/webApps/RickAndMorty.png';

export const webApps = [
  {
    id: '01',
    title: 'readyevent (Teamproject)',
    description:
      'An event planer App for groups with Google Calendar integration.',
    tech: [
      'ReactJS',
      'React Context API',
      'Tailwind CSS',
      'Material UI',
      'Google API',
    ],
    gitHub: 'https://github.com/chingu-voyages/v34-geckos-team-04',
    liveDemo: 'https://readyevent.herokuapp.com/',
    image: readyevent,
  },
  {
    id: '02',
    title: 'Sudokus and Dragons',
    description:
      'Sudoku with a room slection for difficulty and a highscore list.',
    tech: ['ReactJS', 'React-Router', 'CSS', 'Local Storage', 'Sugoku API'],
    gitHub: 'https://github.com/patrikglanemann/capstone-project',
    liveDemo: 'https://capstone-project-sudokus-and-dragons.vercel.app/',
    image: SudokusAndDragons,
  },
  {
    id: '03',
    title: 'Quiz App',
    description: 'Add your own questions and bookmark your favorite ones.',
    tech: ['Vanilla JavaScript', 'Local Storage', 'HTML', 'CSS'],
    gitHub: 'https://github.com/patrikglanemann/Quiz-App',
    liveDemo: 'https://quiz-app-livid-nine.vercel.app/',
    image: QuizApp,
  },
  {
    id: '04',
    title: 'MTG Card Search',
    description: 'A sinmple card search for Magic the Gathering.',
    tech: ['ReactJS', 'Local Storage', 'CSS', 'MtG API'],
    gitHub:
      'https://github.com/patrikglanemann/MTG-react-app/tree/work_branch/',
    liveDemo: 'https://mtg-react-app.vercel.app/',
    image: MTGCardSearch,
  },
  {
    id: '05',
    title: 'Rick and Morty character search',
    description: 'Search and filter characters from Rick and Morty.',
    tech: ['ReactJS', 'CSS', 'Local Storage', 'RickAndMorty API'],
    gitHub: 'https://github.com/patrikglanemann/-vite-vanilla-js-template-rnm',
    liveDemo: 'https://vite-vanilla-js-template-rnm.vercel.app/',
    image: RickAndMorty,
  },
];
