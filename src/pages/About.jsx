import React from "react";
import countryFacts from '../api/countryData.json'


export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the intresting facts
        <br />
        We are proud of
      </h2>
      <div className="gradient-cards">

{
  countryFacts.map((countrys)=>{
    const {id, country, capital, population, fact} = countrys;
    return (
      <div className="card" key={id}>
      <div className="container-card bg-blue-box">
        <p className="card-title">{country}</p>
        <p>
          <span className="card-description">Capital:</span>
          {capital}
        </p>
        <p>
          <span className="card-description">Population:</span>
          {population}
        </p>
        <p>
          <span className="card-description">Intresting facts:</span>
         {fact} 
        </p>
      </div>
    </div>
    )
  })
}

   
      </div>
    </section>
  );
};
