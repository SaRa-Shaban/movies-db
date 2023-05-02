import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'


{/* https://api.themoviedb.org/3/trending/all/day?api_key=468e89a06fc46ef865339697691ebc5a  >>> api with key */ }
// https://image.tmdb.org/t/p/original  >>>static img 
// non static img is poster-path this info from api

export default function Home() {

  // const [trendingItem, setTrendingItem] = useState([])
  const [moviesItem, setMoviesItem] = useState([])
  const [tvsItem, setTvItem] = useState([])
  const [personsItem, setPersonItem] = useState([]);



  useEffect(() => {
    getData('movie', setMoviesItem);
    getData('tv', setTvItem);
    getData('person', setPersonItem);
  }, [])


  let getData = async (mediaType, setTrendingItem) => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=468e89a06fc46ef865339697691ebc5a`);
    // console.log(data);
    // console.log(data.results);
    setTrendingItem(data.results)

  }


  return (
    <>

      {/* ///////////////////////////////////movies///////////////////////////////////////////////// */}
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

        {moviesItem.slice(0, 10).map((movie, index) =>
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


      {/* ///////////////////////////////////tv///////////////////////////////////////////////// */}
      <div className="row g-3 my-3">

        <div className="col-md-4">
          <div>
            <div className='brdr w-25 mb-4'></div>
            <h3>Trending</h3>
            <h3>Tvs</h3>
            <h3>To watch now</h3>
            <span className='text-muted'>most watched tvs by day</span>

            <div className='brdr w-75 mt-4'></div>

          </div>
        </div>

        {tvsItem.slice(0, 10).map((tv, index) =>
          <div key={index} className="col-md-2">
            <Link className='nav-link' to={`/details/${tv.id}/${tv.media_type}`}>
              <div className="tvs position-relative">
                <img className='w-100' src={`https://image.tmdb.org/t/p/original${tv.poster_path} `} alt="" />
                <h2 className='py-2 fs-5'>{tv.title} {tv.name}</h2>
                <div className="rate position-absolute end-0 top-0 bg-info px-2 py-2">{tv.vote_average.toFixed(1)}</div>
              </div>
            </Link>
          </div>
        )}
      </div>

      {/* ///////////////////////////////////person///////////////////////////////////////////////// */}
      <div className="row g-3 my-3">

        <div className="col-md-4">
          <div>
            <div className='brdr w-25 mb-4'></div>
            <h3>Trending</h3>
            <h3>Person</h3>
            <h3>To watch now</h3>
            <span className='text-muted'>most watched person by day</span>

            <div className='brdr w-75 mt-4'></div>

          </div>
        </div>

        {personsItem.slice(0, 10).map((person, index) =>
          <div key={index} className="col-md-2">
            <Link className='nav-link' to={`/details/${person.id}/${person.media_type}`}>
              <div className="persons position-relative">
                <img className='w-100' src={`https://image.tmdb.org/t/p/original${person.profile_path} `} alt="" />
                <h2 className='py-2 fs-5'>{person.title} {person.name}</h2>
                <div className="rate position-absolute end-0 top-0 bg-info px-2 py-2">{Math.round(person.popularity)}</div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
