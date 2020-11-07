import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilm } from '../../lib/get-data.js';
import FilmItemDetail from '../../components/film/itemFilmDetail.js';

const ShowFilm = () => {
  const { id } = useParams();
  const [film, setFilm] = useState({});

  const fetchFilm = async (id) => {
    const filmData = await getFilm(id);
    setFilm(filmData);

  };

  useEffect(() => {
    fetchFilm(id);
  }, [id])

  return (
    <main className="page-show">
      <h2>Show Film </h2>
      <FilmItemDetail filmData={film} view="show"/>        
    </main>
  );
}

export default ShowFilm;
