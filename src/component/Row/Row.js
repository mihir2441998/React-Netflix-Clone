import react, { useEffect, useState } from 'react';
import request from '../../requests/request';
import axios from '../../config/axios';
import './Row.css';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import Banner from '../Banner';


function Row(props) {

    const imageBaseUrl = "https://image.tmdb.org/t/p/original";

    const [movies, setMovies] = useState([]);
    const [selectdVid, setSelectedVid] = useState(null);

    useEffect(() => {
        axios.get(props.apiEndpoint).then((response) => {
            setMovies(response.data.results);
        })
    }, [])

    function extractYouTubeVideoId(url) {
        try {
            // Parse the URL
            console.log(url);
            var parsedUrl = new URL(url);
            // Get the search parameters
            var searchParams = new URLSearchParams(parsedUrl.search);
            // Extract the 'v' parameter, which holds the video ID
            var videoId = searchParams.get('v');
            return videoId;
        } catch (error) {
            console.error("Invalid URL:", error);
            return null;
        }
    }

    function imageOnClick(name) {
        if (selectdVid) {
            setSelectedVid('');
        }
        else {
            console.log("name=" + name);
            var url = movieTrailer(name)
                .then(response => {
                    console.log("response=" + response);
                    setSelectedVid(extractYouTubeVideoId(response));
                }).catch((error) => {
                    console.error('Error fetching trailer:', error);
                });
        }
    }

    function renderTrailer(vId) {
        const opts = {
            height: '390',
            width: '99%',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return <div className='video_center' ><YouTube videoId={vId} opts={opts} /></div>;
    }



    return (

        <div className='row'>
            <h2>{props.title}</h2>
            <div className='row_posters'>
                {console.log("props title, islarge", props.title, props.isLarge)}
                {movies.map((movie) => {
                    return <img
                        onClick={() => {
                            imageOnClick(movie.name || movie.title);
                        }}
                        className={props.isLarge && 'row_poster_large' || 'row_poster'} src={`${imageBaseUrl}/${movie.poster_path}`} alt="" />
                })}

            </div>
            <div>
                {selectdVid && renderTrailer(selectdVid)}
            </div>
        </div>

    );

}

export default Row;