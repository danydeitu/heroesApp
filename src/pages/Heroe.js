import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroeById } from '../selectors/getHeroeById';

const heroesImages = require.context('../assets/heroes');

export const Heroe = () => {

  const { heroeId } = useParams();
  const navigate = useNavigate()

  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);

  if(!heroe){
    return <Navigate to='/'/>
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } = heroe;


  return (
    <div className="row mt-4  animate__animated animate__fadeIn">
      <div className="col-4">
      {/*   <img
          className="img-thumbnail animate__animated animate__fadeInLeft"
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
        /> */}
          <img
          className="img-thumbnail animate__animated animate__fadeInLeft"
          src={heroesImages(`./${heroeId}.jpg`)}
          alt={superhero}
        />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b> {alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b> {publisher}</li>
          <li className="list-group-item"><b>Fist appearence: </b> {first_appearance}</li>
        </ul>
        <hr />
        <h4>Characters</h4>
        <p>{characters}</p>
        <button
          className='btn btn-outline-dark'
          onClick={() => navigate(-1)}
        >
          Ir atrás
        </button>
      </div>
    </div>
  );
};
