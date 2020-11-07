import React, { useEffect, useState } from 'react';
import { getActorData } from '../../lib/get-data.js';
import ActorItem from '../../components/actor/itemActor.js';

//function App() {
const ListActors = () => {
  const [data, setData] = useState([]);

  const fetchAllActors = async () => {
    const dataAll = await getActorData();
    setData(dataAll);
  };

  useEffect(() => {
    fetchAllActors();
  }, []);

  return (
    <main className="PageList">
        <h1>PROYECT</h1>
        <div className="films">
          {data.map((item) => (
            <ActorItem actorData={ item } key={ item._id } view="list"/>
          ))}
        </div>
    </main>   
  );
};

export default ListActors;
