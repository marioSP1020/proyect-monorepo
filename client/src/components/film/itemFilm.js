import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FilmItem = ({filmData,view}) => {
  const { _id, Title, Year, Genre, Actors, Poster } = filmData;


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
    
    <article className="film">
      <h3>{Title}</h3>
      <picture>
        <img src={Poster} alt={Title} />
      </picture>      
      {buttonToRender()}
    </article>  
    
  )
}

export default FilmItem;