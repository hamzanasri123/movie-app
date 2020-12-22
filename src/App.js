import { useState } from "react";
import "./App.css";
import MovieList from "./component/MovieList";
import Search from "./component/Search";
import AddMovie from "./component/AddMovie";

function App() {
  const [film, setFilm] = useState([
    {
      id: Math.random(),
      title: "First Film",
      description: "My description",
      posterUrl: "https://media.timeout.com/images/105667064/630/472/image.jpg",
      rate: 2,
    },
    {
      id: Math.random(),
      title: "Second Film",
      description: "My description",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr63XBTBPrB3fDpDpY1ZxEmUoB8LNIbnR49g&usqp=CAU",
      rate: 1,
    },
    {
      id: Math.random(),
      title: "Third film",
      description: "My description",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/New-York-movie-poster.jpg/220px-New-York-movie-poster.jpg",
      rate: 3,
    },
    {
      id: Math.random(),
      title: "4th Film",
      description: "My description",
      posterUrl:
        "https://english.mathrubhumi.com/polopoly_fs/1.4995563.1598089360!/httpImage/image.jpg_gen/derivatives/landscape_894_577/image.jpg",
      rate: 4,
    },
    {
      id: Math.random(),
      title: "5th Film",
      description: "My description",
      posterUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pmx-scifi1-1575412100.jpg?resize=480:*",
      rate: "",
    },
    {
      id: Math.random(),
      title: "6th Film",
      description: "My description",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqn0Xs6oRkUGggFlP_vlqdhvRBTo2SXqDjHg&usqp=CAU",
      rate: 3,
    },
    {
      id: Math.random(),
      title: "7th Film",
      description: "My description",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqn0Xs6oRkUGggFlP_vlqdhvRBTo2SXqDjHg&usqp=CAU",
      rate: 3,
    },
    {
      id: Math.random(),
      title: "8th Film",
      description: "My description",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqn0Xs6oRkUGggFlP_vlqdhvRBTo2SXqDjHg&usqp=CAU",
      rate: 3,
    },
    {
      id: Math.random(),
      title: "7th Film",
      description: "My description",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqn0Xs6oRkUGggFlP_vlqdhvRBTo2SXqDjHg&usqp=CAU",
      rate: 3,
    },
  ]);
  const [search, setSearch] = useState("");
  const [rateSearch, setRateS] = useState(1);
  const hundelClick = ({ title, rate, description, posterUrl }) => {
    setFilm([...film, { title, rate, description, posterUrl }]);
  };

  return (
    <div className="App">
      <div className="ap">
        <AddMovie hundelClick={hundelClick} />
        <Search
          hundelClick={hundelClick}
          setSearch={setSearch}
          searchByRate={rateSearch}
          setRats={setRateS}
        />
      </div>

      <MovieList film={film} search={search} searchByRate={rateSearch} />
    </div>
  );
}

export default App;
