import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ActorItemDetail = ({actorData,view}) => {
  const { _id, NameArtistic, NameOrigin, FecNac, Nationality, Occupation, Films, Photo} = actorData;


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
    
    <article className="actordetail">
      <h3>{NameArtistic}</h3>
      <picture>
        <img src={Photo} alt={NameArtistic} />
      </picture>
      <div>
        <p>{FecNac}</p>
        <p>{Nationality}</p>
        <p>{Films}</p>
      </div>
            
    </article>  
    
  )
}

export default ActorItemDetail;


/*
<iframe width="300" height="180" src="https://www.youtube.com/embed/OMOVFvcNfvE"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>



<video id="sampleMovie" width="450" height="300" preload controls>
        <source src="https://www.youtube.com/embed/OMOVFvcNfvE"/>
      </video>

*/