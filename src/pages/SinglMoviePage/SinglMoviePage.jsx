import { useEffect, useState, useCallback } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";

import { getFilmInfo } from "shared/services/TheMoviesAPI";

const SinglMoviePage = () => {

    const [movie, setMovie] = useState();
    const {id} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || '/';

    useEffect(()=> {
        const fetchMovie = async() => {
            try{
                const result = await getFilmInfo(id);
                setMovie(result);
            }
            catch({responce}) {
                console.log(responce.data.message);
            }
        }
        fetchMovie();
    }, [id])
    const goBack = useCallback(()=> navigate(from), [navigate, from]);

    return(<>
        <button onClick={goBack}>
        Go Back
        </button>
        <img src="#" alt="#" />
        <h3>Title</h3>
        <p>User Score:</p>
        <h4>Owerview</h4>
        <p>Owerview Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reprehenderit commodi fuga consequatur tempora, dolor sequi odit inventore cumque ipsam.</p>
        <h5>Generes</h5>
        <p>Lorem, ipsum dolor.</p>
        <h6>Additional information</h6>
        <ul>
            <NavLink><li>Cast</li></NavLink>
            <NavLink><li>Rewiews</li></NavLink>
        
        </ul>
        </>
        
        )
}

export default SinglMoviePage;