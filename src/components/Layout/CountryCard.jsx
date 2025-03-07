import {NavLink} from "react-router-dom"
export const CountryCard = ({ Country }) => {
    const {flags, name, population, region, capital} = Country;
  return (
    <li className="country-card card">
        <div className="container-card bg-white-box">
            <img src={flags.svg} alt={flags.alt} />
            <div className="countryInfo">
                <p className="card-title">{name.common}</p>
                <p>
                    <span  className="card-description">Population:</span>
                {population}
                </p>
                <p>
                <span className="card-description">Region:</span>{region}
                </p>
                <p>
                    <span className="card-description">Capital:</span>{capital[0]}
                </p>
                <NavLink to={`/country/${name.common}`}><button>Read more</button> </NavLink>
            </div>
        </div>
    </li>
  )
}
