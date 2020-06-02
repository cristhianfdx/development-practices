import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile(props) {
  const [countries, getCountries] = useState([]);
  const [status, changeStatus] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        getCountries(response.data);
        changeStatus(true);
      })
      .catch((err) => changeStatus(false));
  }, []);

  if (status){
      return (
          <div>
              <ul>
                  {
                    countries.map((country, index) =>
                        <li key={index}>{country.name}</li>
                    )
                  }
              </ul>
          </div>
      );
  }else{
      return(
          <div>
              <h1>Cargando...</h1>
          </div>
      );
  }
}

export default Profile;
