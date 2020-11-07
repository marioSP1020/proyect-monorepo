import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActor } from '../../lib/get-data.js';
import ActorItemDetail from '../../components/actor/itemActorDetail.js';

const ShowActor = () => {
  const { id } = useParams();
  const [actor, setActor] = useState({});

  const fetchActor= async (id) => {
    const actorData = await getActor(id);
    setActor(actorData);

  };

  useEffect(() => {
    fetchActor(id);
  }, [id])

  return (
    <main className="page-show">
      <h2>Show Film </h2>
      <ActorItemDetail actorData={actor} view="show"/>        
    </main>
  );
}

export default ShowActor;
