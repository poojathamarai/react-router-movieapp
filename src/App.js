import { useState } from 'react';
import { MovieList } from './MovieList';
import {Switch,Route,Link,Redirect} from "react-router-dom";
import { AddColor } from './AddColor';
import { Home } from './Home';
import './App.css';
import { AddMovie } from './AddMovie';
import { NotFound } from './NotFound';
import { useParams } from "react-router-dom";
function App() {
  const movies=[
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      trailer:"https://www.youtube.com/watch?v=BoohRoVA9WQ",
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      trailer:"https://www.youtube.com/watch?v=38A__WT3-o0",
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer:"https://www.youtube.com/watch?v=Gc6dEDnL8JA"
    },
    {
      name: "The Avengers",
      rating: 8,
      summary: `Marvel's The Avengers (classified under the name Marvel Avengers
        Assemble in the United Kingdom and Ireland), or simply The Avengers, is
        a 2012 American superhero film based on the Marvel Comics superhero team
        of the same name.`,
        trailer:"https://www.youtube.com/watch?v=eOrNdBpGMv8",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      trailer:"https://www.youtube.com/watch?v=zSWdZVtXT7E",
      summary: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA
    pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team
    of researchers, to find a new planet for humans.`
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      trailer:"https://www.youtube.com/watch?v=zSWdZVtXT7E",
      summary: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.`
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      trailer:"https://www.youtube.com/watch?v=NgsQ8mVkN8w",
      summary: `Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.`
    },
  
    {
      name: 96,
      poster:
        "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      rating: 8.6,
      trailer:"https://www.youtube.com/watch?v=r0synl-lI4I",
      summary: `K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.`
    },
  
    {
      name: "M.S. Dhoni: The Untold Story",
      poster: "https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
      rating: 7.9,
      trailer:"https://www.youtube.com/watch?v=G2zb_nbrnyU",
      summary: `M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.`
    },
    {
      name: "Dark Knight",
      poster:
        "https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
      rating: 9,
      trailer:"https://www.youtube.com/watch?v=EXeTwQWrcwY",
      summary:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      name: "King Kong",
      poster: "https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
      rating: 9,
      trailer:"https://www.youtube.com/watch?v=1TSidCNA7mQ",
      summary:
        "Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor."
    }
  ];
  const [movieList,setMovieList]=useState(movies);
  return (   
    <div className="App">
         <div className="router-container">
              <Link to="/">Home</Link>
              <Link to="/movie/add">Add movie form</Link>
              <Link to="/movie">Movie</Link>
              <Link to="/flims">Flims</Link>
              <Link to="/colorgame">Colour Game</Link>
        </div>
        <Switch>
        <Route exact path="/">
                <Home/>
        </Route>
        <Route path="/movie/add">
           <AddMovie movieList={movieList} setMovieList={setMovieList}/>
        </Route>
        <Route path="/movie/:id">
           <MovieDetails movieList={movieList}/>
        </Route>
        <Route path="/movie">
      <MovieList movies={movieList} setMovieList={setMovieList} />
      </Route>
      <Route path="/flims">
          <Redirect to="/movie" />
        </Route>
        <Route path="/colorgame">
             <AddColor/>
        </Route>
        <Route path="**">
          <NotFound/>
        </Route>
      </Switch>
    </div>
     );
}

function MovieDetails({movieList}){
  const id=useParams();
  const movie=movieList[id]
   const styles = {
    color: movie.rating >= 8.5 ? "teal" : "crimson",
    fontSize: "18px"
  };
  return(
    <div>
    <iframe 
    width="100%" 
    height="480" 
    src={movie.trailer} 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
    <div className="movie-detail-container">
  <div className="movie-specs">
  <h3 className="movie-name">{movie.name}</h3>
  <p style={styles} className="movie-rating">???{movie.rating}</p>
  </div>
<p className="movie-summary">{movie.summary}</p>
</div>   
</div>)
}
export default App;
