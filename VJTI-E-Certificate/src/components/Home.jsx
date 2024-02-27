import React from 'react';
import Cards from './Cards';
import "../css/Cards.css";

import enthu from '../Images/enthu.jpg';
import prati from '../Images/pratibimb.jpg';
import digi from '../Images/digital.png';
import tech from '../Images/techno.jpg';
import ecell from '../Images/ecell.jpg';
import dla from '../Images/dla.png';

function Home() {
  return (
    <>
    <div className="card-container">
      <Cards img={digi} name="Digital" />
      <Cards img={enthu} name="Enthusia" />
      <Cards img={prati} name="Pratibimb" />
      <Cards img={tech} name="Technovanza" />
      <Cards img={ecell} name="ECell" />
      <Cards img={dla} name="DLA" />
    </div>
    </>
  );
}

export default Home;
