import React, { useEffect, useState } from 'react';
import { getFilmData } from '../lib/get-data.js';

//function App() {
const App = () => {
  const [data, setData] = useState([]);

  const fetchAllFIlms = async () => {
    const dataAll = await getFilmData();
    setData(dataAll);
  };

  useEffect(() => {
    fetchAllFIlms();
  }, []);

  return (
    <>
      <h1>PROYECT</h1>
      <section>
        {data.map((item) => (
          <article key={item._id}>
            <h2>{item.Title}</h2>
            <picture>
              <img src={item.Poster} alt={item.Title} />
            </picture>
          </article>
        ))}
      </section>
    </>
  );
};

export default App;
