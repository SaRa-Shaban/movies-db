import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



export default function Movies() {
  const [moviesItem, setMoviesItem] = useState([]);

  useEffect(() => {
    getData('movie', setMoviesItem);
  }, []);

  let getData = async (mediaType, setTrendingItem) => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=468e89a06fc46ef865339697691ebc5a`);
    // console.log(data);
    // console.log(data.results);
    setTrendingItem(data.results)

  }

  return (
    <>
      <div className="row g-3 my-3 py-5">
        
      <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="col-md-4">
          <div>
            <div className='brdr w-25 mb-4'></div>
            <h3>Trending</h3>
            <h3>Movies</h3>
            <h3>To watch now</h3>
            <span className='text-muted'>most watched movies by day</span>
            <div className='brdr w-75 mt-4'></div>
          </div>
        </div>

        {moviesItem.map((movie, index) =>
          <div key={index} className="col-md-2">
            <Link className='nav-link' to={`/details/${movie.id}/${movie.media_type}`}>
              <div className="movies position-relative">
                <img className='w-100' src={`https://image.tmdb.org/t/p/original${movie.poster_path} `} alt="" />
                <h2 className='py-2 fs-5'>{movie.title} {movie.name}</h2>
                <div className="rate position-absolute end-0 top-0 bg-info px-2 py-2">{movie.vote_average.toFixed(1)}</div>
              </div>
            </Link>
          </div>
        )}
      </div>

    </>
  )
}
