import readyevent from "../assets/webApps/readyevent.png";
import SudokusAndDragons from "../assets/webApps/SudokusAndDragons.png";
import BudgetExpenses from "../assets/webApps/BudgetExpensesApp.png";
import QuizApp from "../assets/webApps/QuizApp.png";
import MTGCardSearch from "../assets/webApps/MTGCardSearch.png";
import RickAndMorty from "../assets/webApps/RickAndMorty.png";

export const webApps = [
  {
    id: "1001",
    title: "readyevent (Teamproject)",
    description:
      "An event planer App for groups with Google Calendar integration.",
    tech: [
      "ReactJS",
      "React Context API",
      "Tailwind CSS",
      "Material UI",
      "Google API",
    ],
    gitHub: "https://github.com/chingu-voyages/v34-geckos-team-04",
    liveDemo: "https://readyevent.herokuapp.com/",
    image: readyevent,
  },
  {
    id: "1002",
    title: "Sudokus and Dragons",
    description:
      "Sudoku with a room selection for difficulty and a highscore list.",
    tech: ["ReactJS", "React-Router", "CSS", "Local Storage", "Sugoku API"],
    gitHub: "https://github.com/patrikglanemann/capstone-project",
    liveDemo: "https://capstone-project-sudokus-and-dragons.vercel.app/",
    image: SudokusAndDragons,
  },
  {
    id: "1003",
    title: "Budget and Expenses App",
    description: "Manage your budget and add expenses to different categories.",
    tech: [
      "ReactJS",
      "Bootstrap",
      "React-Bootstrap",
      "React Context API",
      "Local Storage",
    ],
    gitHub: "https://github.com/patrikglanemann/Budget-Expenses-App",
    liveDemo: "https://budget-expenses-app.vercel.app/",
    image: BudgetExpenses,
  },
  {
    id: "1004",
    title: "Quiz App",
    description: "Add your own questions and bookmark your favorite ones.",
    tech: ["Vanilla JavaScript", "Local Storage", "HTML", "CSS"],
    gitHub: "https://github.com/patrikglanemann/Quiz-App",
    liveDemo: "https://quiz-app-livid-nine.vercel.app/",
    image: QuizApp,
  },
  {
    id: "1005",
    title: "MTG Card Search",
    description: "A simple card search for Magic the Gathering.",
    tech: ["ReactJS", "Local Storage", "CSS", "MtG API"],
    gitHub:
      "https://github.com/patrikglanemann/MTG-react-app/tree/work_branch/",
    liveDemo: "https://mtg-react-app.vercel.app/",
    image: MTGCardSearch,
  },
  {
    id: "1006",
    title: "Rick and Morty character search",
    description: "Search and filter characters from Rick and Morty.",
    tech: ["ReactJS", "CSS", "Local Storage", "RickAndMorty API"],
    gitHub: "https://github.com/patrikglanemann/-vite-vanilla-js-template-rnm",
    liveDemo: "https://vite-vanilla-js-template-rnm.vercel.app/",
    image: RickAndMorty,
  },
];
