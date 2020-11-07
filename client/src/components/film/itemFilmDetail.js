import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FilmItemDetail = ({filmData,view}) => {
  const { _id, Title, Year, Genre, Actors, Poster, Trailer } = filmData;


  const buttonToRender = () => {
    let link;
    switch (view) {
      case 'list':
        link = <Link to={`/film/${_id}`}>Show</Link>
        break;
      
      // case 'show':
      //   link = <Link to={`/film/${_id}/edit`}>Edit</Link>
      //   break;
      
      default:
        link = <></>;
        break;
    }

    return link;

  };

  return (
    
    <article className="filmdetail">
      <h3>{Title}</h3>
      <picture>
        <img src={Poster} alt={Title} />
      </picture>
      <div>
        <p>{Year}</p>
        <p>{Genre}</p>
        <p>{Actors}</p>
      </div>
      <iframe width="300" height="180" src={Trailer}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      
      
      
      
    </article>  
    
  )
}

export default FilmItemDetail;


/*
<iframe width="300" height="180" src="https://www.youtube.com/embed/OMOVFvcNfvE"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>



<video id="sampleMovie" width="450" height="300" preload controls>
        <source src="https://www.youtube.com/embed/OMOVFvcNfvE"/>
      </video>

*/