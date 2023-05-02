import axios, { Axios } from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'





export default function Details() {

  useEffect(() => {
   document.title='details'
  }, [])
  

  const [itemDetails, setItemDetails] = useState({})
  let params = useParams();
  // console.log(params);

  let getItemsDetails = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=468e89a06fc46ef865339697691ebc5a&language=en-US`)
    // console.log(data);
    setItemDetails(data)
  }

  useEffect(() => {
    getItemsDetails()
  }, [])




  return (
    <>
      <div className="row g-3 my-5">
        <div className="col-md-3">
          {params.mediaType == 'person' ?
          // params.mediaType bcz img differ in api in person about tv &movies 
            <img className='w-100' src={`https://image.tmdb.org/t/p/original${itemDetails.profile_path}`} alt="" /> :
            <img className='w-100' src={`https://image.tmdb.org/t/p/original${itemDetails.poster_path}`} alt="" />
            // itemDetails carry data (obj)
          }
        </div>

        <div className="col-md-9 px-5">
          <h2>{itemDetails.title} {itemDetails.name}</h2>



          {/* <h6 className='d-inline bg-info p-2 my-4 rounded-2'>{itemDetails.genres[0].name}</h6>
          <h6 className='d-inline bg-info p-2 my-4 mx-4 rounded-2'>{itemDetails.genres[1].name}</h6>
          <h6 className='d-inline bg-info p-2 my-4 rounded-2'>{itemDetails.genres[2].name}</h6> */}

          {params.mediaType == 'person' ?
            <>
              <h4 className='write pt-2 pb-3'>{itemDetails.place_of_birth}</h4>
              <h5 className=' py-1 pt-4'>known for department: {itemDetails.known_for_department}</h5>
              <h5 className='py-1'>popularity: {itemDetails.popularity}</h5>
              <h5 className='py-1'>birthday: {itemDetails.birthday}</h5>
            </> :
            <>
              <h4 className='write pt-2 pb-3'>{itemDetails.tagline}</h4>

              {/*         
              <span className='bg-info p-2 my-4 rounded-2'>{itemDetails.genres[0].name}</span>
              <span className='bg-info p-2 my-4 mx-4 rounded-2'>{itemDetails.genres[1].name}</span>
              <span className='bg-info p-2 my-4 rounded-2'>{itemDetails.genres[2].name}</span> */}

              <h5 className=' py-1 pt-4'>vote: {itemDetails.vote_average}</h5>
              <h5 className='py-1'>vote count: {itemDetails.vote_count}</h5>
              <h5 className='py-1'>popularity: {itemDetails.popularity}</h5>
              <h5 className='py-1'>release_date: {itemDetails.release_date}</h5>
            </>
          }




          <p className='write py-4'>{itemDetails.overview}{itemDetails.biography}</p>
        </div>
      </div>
    </>
  )
}
