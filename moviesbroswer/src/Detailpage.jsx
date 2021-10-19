import { IconContext } from "react-icons/lib";
import { FcPrevious } from "react-icons/fc";
import { HiPlay } from "react-icons/hi";
import { AiFillStar} from "react-icons/ai";
import axios from 'axios';
import React, { useEffect } from "react";

export  default function Detail() {
    
    const API_KEY = "api_key=47fae463820cf95a65aad6491a78ce07";
    const BASE_URL="https://api.themoviedb.org/3/";
    const PARAMS = "&language=en-US";
    
    const [movieId, setMovieId]=React.useState(123);
    const [movie, setMovie]=React.useState([]);

    const URL_movie = `movie/${movieId}?`
    async function movieDataPromise(url){
        return await axios.get(BASE_URL+url+API_KEY+PARAMS)
    }

    async function fetchMovie(){

        const movieData = await movieDataPromise(URL_movie)
        setMovie(movieData.data)
        

    }
    useEffect(async()=>{

        await fetchMovie().then()

    },[])

    function DisplayGenres(){
        const genres = movie.genres
            if(movie.length !==0){
                return(
                    genres.map((genre)=>{
                        return <p key={genre.id}>{genre.name} </p>
                    })
                )
            } else return <div></div>
    }
    
    return(
        
        <div className="detailContainer">
            <div className="top">
            <img src={"https://image.tmdb.org/t/p/w400" + movie.poster_path} alt={movie.title} />
                <IconContext.Provider value={{size: "10vw"}}>
                <FcPrevious/>
                </IconContext.Provider>
                <IconContext.Provider value={{size: "10vw"}}>
                <HiPlay/>
                </IconContext.Provider>
            </div>
            <div className="title">
                <p>{movie.title}</p>
                <p>{movie.runtime + " min"}</p>
                <p>
                <IconContext.Provider value={{size: "5vw"}}>
                <AiFillStar/>
                </IconContext.Provider>
                    {movie.vote_average} (IMDb)
                    </p>
            </div>
            <hr/>
            <div>
                <div>
                    <p>Release date</p>
                    <p>{movie.release_date}</p>
                </div>
                <div>
                    <DisplayGenres />
                    <p>boucle</p>
                </div>
            </div>
            <div>
                <p>Synopsis:</p>
                <p>{movie.overview}</p>
            </div>
            <div>
                <p>Related Movie</p>
                <div>boucle</div>
            </div>
        </div>
    )   
}