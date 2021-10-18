import React from 'react';
import Navbar from './nav';
import {BiSearch} from "react-icons/bi"
import {IconContext} from 'react-icons'
import axios from 'axios';
import { useEffect } from 'react';

export  default function Discover() {

    // construction de l adresse api
    const [page, setPage]=React.useState(1);
    const API_KEY = "api_key=47fae463820cf95a65aad6491a78ce07";
    const BASE_URL="https://api.themoviedb.org/3/";
    const PARAMS = "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate";
    const PARAMS_DISCOVER = `&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=`
    const URL_Genre = "genre/movie/list?";
    const URL_Discover = "discover/movie?";
    const API_URL = BASE_URL + URL_Genre + API_KEY + PARAMS;
    const API_DISCOVER = BASE_URL + URL_Discover+API_KEY + PARAMS_DISCOVER;
//    aller rechercher les infos sur l api async = ne pas faire temp que await a pas ete fait
    
    async function moviePromise(URL) {
        return await axios.get(URL)
    }
    
    const [gender, setGender]=React.useState(28);
    const [moviegenre, setMovieGenre]=React.useState([]);
    const [Bygender, setByGender]=React.useState([]);

    useEffect(()=>{

        async function fetchMovie(){

            // recuperation donnée quand gender modifiée
            // fetch
            const movieData = await moviePromise(API_URL) 
            // selectionner les données dont on a besoin
            setMovieGenre(movieData.data.genres)
            const movieGenreData =  await moviePromise(API_DISCOVER)
            setByGender(movieGenreData.data.results)
        }
        fetchMovie()
    },[])

    //<-------------------------------------------------------------------------------------->
   
  
    // module pour afficher les genre
    

    function NavGender(){
        function changeGender(e){
            // prevent enpeche le rechargerment de la page 
           
            e.preventDefault()
           
            // au click on recup l'id et on set le gender

            setGender(e.target.id)
           
        }
        return(
            
            // afficher les genre

            moviegenre.map((genre)=>{

                return(
                    <p onClick={(e)=>changeGender(e)} key={genre.id} id={genre.id}>{genre.name}</p>
                )

            })
           

        )

    }

    //<----------------------------------------------------------------------------------------->
  
    // module pour afficher les film selon l'id



    function MoviesView(){

        return(
                
            Bygender.map((movie)=>{
                return(

                    <div className="movieGenre" key={movie.id}>
                        <div className="divSize">
                            <img src={"https://image.tmdb.org/t/p/w400" + movie.poster_path} alt={movie.title}/>
                        </div>
                        <p>{movie.title} <span>({movie.release_date.split('-')[0]})</span></p>
                    </div>
                )
            })

        )

    }




    //<--------------------------------------------------------------------------------------------->
    return(
        
        <div>
            <Navbar />
            <h1><span>Movie</span>Browser</h1>
            <div className='input'>
                <input />
            <IconContext.Provider value={{size:'3vh'}}>
                        <BiSearch />    
                </IconContext.Provider>
            </div>
        
            <nav className='nameGender'>
                <NavGender />
            </nav>
            <div>
            <MoviesView />
            </div>
        </div>
    )   
}