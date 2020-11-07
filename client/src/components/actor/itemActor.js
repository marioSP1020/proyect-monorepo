import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ActorItem = ({actorData,view}) => {
  const { _id, NameArtistic, NameOrigin, FecNac, Nationality, Occupation, Films, Photo} = actorData;


  const buttonToRender = () => {
    let link;
    switch (view) {
      case 'list':
        link = <Link to={`/actor/${_id}`}>Show</Link>
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
    
    <article className="actor">
      <h3>{NameArtistic}</h3>
      <picture>
        <img src={Photo} alt={NameArtistic} />
      </picture>      
      {buttonToRender()}
    </article>  
    
  )
}

export default ActorItem;