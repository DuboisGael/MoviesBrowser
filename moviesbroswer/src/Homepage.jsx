import {useEffect, useState} from "react";
import {AiFillPlayCircle} from 'react-icons/ai';
import {IconContext} from 'react-icons';
import Navbar from './nav';
import Carousel from 'react-elastic-carousel'

export default function Home(props){
    
    function RandomMovie(){
        const movie = props.movies[Math.floor(Math.random()*20)]
        return(
            <div className="images">
                <img src={movie && "https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                     alt={movie && movie.title}/>
                <div className="spotlight">
                    <IconContext.Provider value={{size: '7vw'}}>
                        <AiFillPlayCircle />
                    </IconContext.Provider>
                    <div>
                        <p>Movie Spotlight</p>
                        <h3>{movie && movie.title}</h3>
                    </div>
                </div>
            </div>
        )
    }

    function Slider(){

        const dataMovie=props.movies

        return dataMovie.map(movie=>{
            return(
               
                <img src={"https://image.tmdb.org/t/p/w400" + movie.poster_path}
                alt={movie.title}/>
               
            )
        })
    }
    return(
        <div>
            <Navbar />
            <h1><span>Movie</span>Browser</h1>
            <RandomMovie />
            <h2>tending</h2>
            <div className="slider">
            <Carousel
                children={Slider()}
                pagination={false}
                showArrows={false}
                breakPoints={[{"width": 100}]}                        
                 enableAutoPlay={true}
            />
            
            </div>
        </div>
    );
}