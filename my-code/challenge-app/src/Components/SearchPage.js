import React, {useState} from 'react';

export default function SearchBar() {

    const handleKeypress = e => {
      if (e.keyCode === 13) {
        handleSubmit();
      }
    };

    const [query, setQuery] = useState("");

    const searchMovies =async (e) => {
      e.preventDefault();
      console.log("submitting");

      const query = "Jurassic Park";

      const url = `https://api.themoviedb.org/3/search/movie?api_key=c98b59f5d02b82a1f8254fc0d21d8eb7&language=en-US&query=${query}&page=1&include_adult=false`;
      
      try {
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
      }catch(err){
        console.log(err);
      }

    }
    return (
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query" />
        <input className="input" type="text" name="query"
        placeholder="Search movies..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={handleKeypress} />
      </form>
    )
}