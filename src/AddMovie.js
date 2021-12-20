import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
export function AddMovie({ movieList , setMovieList }) {
  const [name, setName] = useState('');
  const [poster, setPoster] = useState('');
  const [rating, setRating] = useState('');
  const [summary, setSummary] = useState('');
  const history=useHistory();
  return (<div className="add-movie-form">
    <TextField id="standard-basic" label="Enter the name" variant="standard"
      value={name}
      onChange={(event) => setName(event.target.value)} />
    <TextField id="standard-basic" label="Enter the poster" variant="standard"
      value={poster}
      onChange={(event) => setPoster(event.target.value)} />
    <TextField id="standard-basic" label="Enter the rating" variant="standard"
      value={rating}
      onChange={(event) => setRating(event.target.value)} />
    <TextField id="standard-basic" label="Enter the summary" variant="standard"
      value={summary}
      onChange={(event) => setSummary(event.target.value)} />
    <Button
      variant="contained"
      onClick={() => {
        const newMovie = {
          name: name,
          poster: poster,
          rating: rating,
          summary: summary
        };
        setMovieList([...movieList, newMovie]);
        history.push("/movie");
      }}>Add movie</Button>
  </div>);
}
