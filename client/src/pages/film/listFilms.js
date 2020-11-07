import React, { useEffect, useState } from 'react';
import { getFilmData } from '../../lib/get-data.js';
import FilmItem from '../../components/film/itemFilm.js';

//function App() {
const ListFilms = () => {
  const [data, setData] = useState([]);

  const fetchAllFIlms = async () => {
    const dataAll = await getFilmData();
    setData(dataAll);
  };

  useEffect(() => {
    fetchAllFIlms();
  }, []);

  return (
    <main className="PageList">
        <h1>PROYECT</h1>
        <div className="films">
          {data.map((item) => (
            <FilmItem filmData={ item } key={ item._id } view="list"/>
          ))}
        </div>
    </main>   
  );
};

export default ListFilms;


/*
<article key={item._id}>
              <h2>{item.Title}</h2>
              <picture>
                <img src={item.Poster} alt={item.Title} />
              </picture>
            </article>
*/