import React, { useEffect, useState } from 'react';
import { getFilmData } from '../lib/get-data.js'


//function App() {
const App = () => {

  const [data, setData] = useState('');

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
          <div key={item._key}>
            {item.Poster}
          </div>
        ))
        }
      </section>    
    </>
    
  );
}

export default App;
