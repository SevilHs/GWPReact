import React from 'react'
import { useNavigate } from 'react-router-dom'


const Movie = ({movie, deleteMovie,editMovie}) => {
    const navigate=useNavigate()
  return (
    <div className='col col-12 col-md-6 col-lg-4' >
        <div className="mobie-card" style={{border:"1px solid #ddd", height:"400px", marginBottom:"30px"}}>
        <img src={movie.Images} alt="" style={{height:"190px", width:"100%"}}/>
        <div>
            <p>Title:{movie.Title}</p>
            <p>Director:{movie.Director}</p>
            <p>Year:{movie.Year}</p>
            <p>Imdb:{movie.imdbRating}</p>
            <span onClick={()=>{
                editMovie(movie.id),
                navigate(`/addedit/${movie.id}`)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{width:"30px", marginRight:"30px", cursor:"pointer"}} >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            </span>
            <span onClick={()=>deleteMovie(movie.id)} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{width:"30px", cursor:"pointer"}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            </span>
        </div>
        </div>
    </div>
  )
}

export default Movie